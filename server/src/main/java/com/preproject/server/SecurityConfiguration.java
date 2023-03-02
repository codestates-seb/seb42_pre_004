package com.preproject.server;

import com.preproject.server.auth.JwtTokenizer;
import com.preproject.server.auth.entryPoint.MemberAuthenticationEntryPoint;
import com.preproject.server.auth.filter.JwtAuthenticationFilter;
import com.preproject.server.auth.filter.JwtVerificationFilter;
import com.preproject.server.auth.handler.MemberAccessDeniedHandler;
import com.preproject.server.auth.handler.jwt.MemberAuthenticationFailureHandler;
import com.preproject.server.auth.handler.jwt.MemberAuthenticationSuccessHandler;
import com.preproject.server.auth.handler.oauth2.OAuth2MemberSuccessHandler;
import com.preproject.server.auth.utils.CustomAuthorityUtils;
import com.preproject.server.member.Service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.config.oauth2.client.CommonOAuth2Provider;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberService memberService;
    @Value("${spring.security.oauth2.client.registration.google.client-id}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.google.client-secret}")
    private String clientSecret;


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin();
        http
                .csrf().disable()
                .cors(withDefaults())
//                .cors().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS); //세션 생성X
        http
                .oauth2Login(oauth2 -> oauth2.successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer,authorityUtils,memberService,clientRegistration())));
        http
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler());

        http
                .authorizeRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/users").permitAll()  //회원가입
                        .antMatchers(HttpMethod.GET, "/users/**").permitAll()
                        .antMatchers(HttpMethod.GET, "/questions/**").permitAll()
                        .anyRequest().authenticated()
                );
        http
                .apply(new CustomFilterConfigurer());

        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedOriginPatterns(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE"));
        configuration.setAllowCredentials(true);
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setExposedHeaders(Arrays.asList("Authorization", "Location", "Refresh"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    @Configuration
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            //기본 requset URL  jwt/login 으로 변경
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());


            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);
            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter,JwtAuthenticationFilter.class)
//                    .addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
            ;
        }

    }

    @Bean
    public ClientRegistrationRepository clientRegistrationRepository() {
        ClientRegistration clientRegistration = clientRegistration();
        return new InMemoryClientRegistrationRepository(clientRegistration);
    }
    //스프링 부트에서 자동으로 등록해주는 OAuth2 를 위한 설정을 직적 등록 다양한정보 추가 가능

    private ClientRegistration clientRegistration() {
        
        return CommonOAuth2Provider
                .GOOGLE
                .getBuilder("google")
                .clientId(clientId)
                .clientSecret(clientSecret)
                .build();
    }

}

