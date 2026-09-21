package com.growwithcode.user;
import jakarta.persistence.*;import java.time.Instant;
@Entity @Table(name="app_user") public class User{
@Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
@Column(nullable=false,unique=true,length=254) private String email;
@Column(name="password_hash",nullable=false,length=100) private String passwordHash;
@Column(name="display_name",nullable=false,length=80) private String displayName;
@Column(name="created_at",nullable=false) private Instant createdAt=Instant.now();
protected User(){} public User(String e,String p,String d){email=e;passwordHash=p;displayName=d;}
public Long getId(){return id;} public String getEmail(){return email;} public String getPasswordHash(){return passwordHash;} public String getDisplayName(){return displayName;}
}
