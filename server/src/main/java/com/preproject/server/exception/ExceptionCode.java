package com.preproject.server.exception;

import org.springframework.http.HttpStatus;

public interface ExceptionCode {
  HttpStatus getStatus();
  String getMessage();
}
