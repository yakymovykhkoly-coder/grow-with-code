package com.growwithcode.auth;
import jakarta.validation.constraints.*;
record RegisterRequest(@Email @NotBlank String email,@Size(min=8,max=72) String password,@NotBlank @Size(max=80) String displayName){}
record LoginRequest(@Email @NotBlank String email,@NotBlank String password){}
record AuthResponse(String token,UserView user){}
record UserView(Long id,String email,String displayName){}
