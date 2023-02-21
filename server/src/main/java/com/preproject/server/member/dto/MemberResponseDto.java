package com.preproject.server.member.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class MemberResponseDto {
    private Long id;
    private String password;
    private String displayName;
    private String profile;
    private String aboutMe;
    private List<String> tag;
    private String location;

    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;

}
