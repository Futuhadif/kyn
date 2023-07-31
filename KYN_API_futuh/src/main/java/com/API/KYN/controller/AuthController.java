package com.API.KYN.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.API.KYN.dto.JwtAuthenticationResponse;
import com.API.KYN.dto.LoginRequest;
import com.API.KYN.dto.UserDto;
import com.API.KYN.entity.User;
import com.API.KYN.repository.UserRepository;
import com.API.KYN.security.JwtTokenProvider;
import com.API.KYN.security.UserDetailsServiceImpl;
import com.API.KYN.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    
    @Autowired
    UserRepository ur;
    
    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
    	UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getUsername());
    	
    	if (!passwordEncoder.matches(loginRequest.getPassword(), userDetails.getPassword())) {
            // Password tidak cocok, kembalikan tanggapan yang sesuai
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Username atau password salah");
        }
    	
    	Authentication authentication = new UsernamePasswordAuthenticationToken(
    			userDetails, loginRequest.getPassword(), 
    			userDetails.getAuthorities());

    	
    	
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtTokenProvider.generateToken(authentication);
        
    	User user = ur.findByUsername(loginRequest.getUsername());

        UserDto dto= new UserDto(user.getName(),user.getUsername(), user.getEmail(), token);
        return ResponseEntity.ok(dto);
    }
    
}

