package com.API.KYN.controller;

import java.io.IOException;
import java.util.Optional;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.API.KYN.dto.UserDto;
import com.API.KYN.entity.User;
import com.API.KYN.repository.UserRepository;
import com.API.KYN.security.JwtTokenProvider;
import com.API.KYN.service.UserServiceImpl;

@RestController
@RequestMapping("/api/user")
public class UserController {

	JwtTokenProvider jwtTokenProvider = new JwtTokenProvider();
	
	
	@Autowired
	UserServiceImpl us;
	
	@Autowired
	UserRepository ur;
	
	@PostMapping("/register")
	public ResponseEntity<String> addUser(@RequestBody User user) {

		String newUser = us.save(user);
		return ResponseEntity.ok(newUser);
	}
	
//	  @GetMapping(value = "/me")
//	  public UserDto getLoginUser(Authentication authentication) {
//		  System.out.println(authentication.getName());
//	    User user =   ur.findByUsername(authentication.getName());
//
//	    if (user == null) {
//	      System.err.println("User not found");
//	    }
//	    
//	    System.out.println(user.getName());
//	    System.out.println(user.getUsername());
//	    System.out.println(user.getEmail());
//	    UserDto dto = new UserDto(user.getName(), user.getUsername(), user.getEmail());
//	    return dto;
//	  }
	
	
//	 @GetMapping(value = "/me")
//	  public UserDto getLoginUser(HttpServletRequest request, HttpServletResponse response)
//	            throws IOException, ServletException {
//	        String token = request.getHeader("Authorization");
//	        
//	        System.out.println();
//	        System.out.println();
//	        System.out.println("masuk ke getlogin");
//	        if (token != null && token.startsWith("Bearer ")) {
//	            token = token.substring(7);
//	            System.out.println(token);
//
//	            if (jwtTokenProvider.validateToken(token)) {
//	            	System.out.println("masuk");
//	               // String username = jwtTokenProvider.getUsernameFromToken(token);
//
//	            	System.out.println(jwtTokenProvider.getUsernameFromToken(token));
//	                String userId = jwtTokenProvider.getUsernameFromToken(token);
//	                // Buat objek Authentication menggunakan UserId
//	                Authentication authentication = new UsernamePasswordAuthenticationToken(userId, null);
//	                System.out.println("masukkk");
//	                System.out.println(authentication.getName());
//	                User user =   ur.findByUsername(authentication.getName());
//	                
//	                if (user == null) {
//	          	      System.err.println("User not found");
//	          	    }
//	          	    
//	          	    System.out.println(user.getName());
//	          	    System.out.println(user.getUsername());
//	          	    System.out.println(user.getEmail());
//	          	    UserDto dto = new UserDto(user.getName(), user.getUsername(), user.getEmail());
//	          	    return dto;
//	                
//	            }
//	        }
//	        return null;
//	    }
	
}
