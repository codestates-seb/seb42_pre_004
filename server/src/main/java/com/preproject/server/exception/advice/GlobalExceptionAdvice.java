package com.preproject.server.exception.advice;

import com.preproject.server.dto.ResponseDto;
import com.preproject.server.exception.BusinessLogicException;
import com.preproject.server.exception.ErrorResponse;
import javax.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionAdvice {

  @ExceptionHandler
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  public ErrorResponse handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
    return ErrorResponse.of(e.getBindingResult());
  }

  @ExceptionHandler
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  public ErrorResponse handleConstraintViolationException(ConstraintViolationException e) {
    return ErrorResponse.of(e.getConstraintViolations());
  }

  @ExceptionHandler
  public ResponseEntity handleBusinessLogicException(BusinessLogicException e) {
    return ResponseEntity.status(e.getExceptionCode().getStatus())
        .body(new ResponseDto<>(e.getExceptionCode().getMessage()));
  }

}
