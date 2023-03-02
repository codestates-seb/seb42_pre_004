package com.preproject.server.comment.controller;

import com.preproject.server.comment.dto.CommentPostDto;
import com.preproject.server.comment.entity.Comment;
import com.preproject.server.comment.service.CommentService;
import com.preproject.server.comment.service.CommentTransService;
import com.preproject.server.dto.ResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@Slf4j
@RequiredArgsConstructor
public class CommentController {

  private final CommentService commentService;
  private final CommentTransService commentTransService;


  @PostMapping("/questions/{id}/comments")
  public ResponseEntity postQuestionComment(
      @Valid @RequestBody CommentPostDto commentPostDto,
      @PathVariable("id") @Positive long questionId) {
    log.info("## POST COMMENT: {}", commentPostDto.toString());
    Comment comment = commentService.createComment(
        commentTransService.questionCommentPostDtoToComment(commentPostDto, questionId));
    URI uri = UriComponentsBuilder.newInstance()
        .path("/questions/{question-id}/comments/{comment-id}")
        .buildAndExpand(questionId, comment.getId()).toUri();
    return ResponseEntity.created(uri).body(
        new ResponseDto<>(commentTransService.commentToCommentResponseDto(comment)));
  }

  @PostMapping("/questions/{question-id}/answers/{answer-id}/comments")
  public ResponseEntity postAnswerComment(
          @Valid @RequestBody CommentPostDto commentPostDto,
          @PathVariable("answer-id") @Positive long answerId,
          @PathVariable("question-id") @Positive long questionId) {
    log.info("#### POASTANSWERCOMMENT####");
    log.info("#### commentPostDto = {}", commentPostDto);
    Comment comment = commentService.createComment(
            commentTransService.answerCommentPostDtoToComment(commentPostDto, answerId, questionId));
    URI uri = UriComponentsBuilder.newInstance()
            .path("/questions/{question-id}/answers/{answer-id}/comments/{comment-id}")
            .buildAndExpand(questionId, answerId, comment.getId()).toUri();
    return ResponseEntity.created(uri).body(
            new ResponseDto<>(commentTransService.commentToCommentResponseDto(comment)));
  }
}
