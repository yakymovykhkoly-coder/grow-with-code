package com.growwithcode;
import org.junit.jupiter.api.Test;import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;import static org.junit.jupiter.api.Assertions.*;
class PasswordPolicyTest{@Test void bcryptRoundTrip(){var p=new BCryptPasswordEncoder(12);var h=p.encode("CorrectHorseBattery1!");assertTrue(p.matches("CorrectHorseBattery1!",h));assertFalse(p.matches("wrong",h));}}