package com.growwithcode.common;
import java.time.Instant;import java.util.Map;import org.springframework.http.*;import org.springframework.web.bind.MethodArgumentNotValidException;import org.springframework.web.bind.annotation.*;
@RestControllerAdvice public class ApiExceptionHandler{
@ExceptionHandler(MethodArgumentNotValidException.class) ResponseEntity<?> validation(MethodArgumentNotValidException e){return ResponseEntity.badRequest().body(Map.of("error","validation_failed","message","Invalid request","timestamp",Instant.now().toString()));}
@ExceptionHandler(IllegalArgumentException.class) ResponseEntity<?> bad(IllegalArgumentException e){return ResponseEntity.badRequest().body(Map.of("error","bad_request","message",e.getMessage(),"timestamp",Instant.now().toString()));}
}