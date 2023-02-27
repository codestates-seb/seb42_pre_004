package com.preproject.server.answer.dto;

import com.preproject.server.comment.dto.CommentSimpleDto;
import com.preproject.server.member.dto.MemberSimpleDto;
import lombok.*;

import java.time.LocalDateTime;

@Data
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AnswerResponseDto {
    private Long answerId;
    private Long questionId;
    private Long memberId;
    private String content;
    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;

}
