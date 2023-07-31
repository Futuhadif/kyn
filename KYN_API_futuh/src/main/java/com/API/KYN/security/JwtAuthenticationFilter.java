package com.API.KYN.security;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthenticationFilter extends AbstractAuthenticationProcessingFilter {

    private final JwtTokenProvider jwtTokenProvider;

    public JwtAuthenticationFilter(String url, JwtTokenProvider jwtTokenProvider,
                                   AuthenticationManager authenticationManager) {
        super(new AntPathRequestMatcher(url));
        this.jwtTokenProvider = jwtTokenProvider;
        setAuthenticationManager(authenticationManager);
    }
    
    private Authentication auth;

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        String token = request.getHeader("Authorization");
        
        System.out.println();
        System.out.println();
        System.out.println(token);
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            System.out.println(token);

            if (jwtTokenProvider.validateToken(token)) {
            	System.out.println("masuk");
               // String username = jwtTokenProvider.getUsernameFromToken(token);

            	System.out.println(jwtTokenProvider.getUsernameFromToken(token));
                String userId = jwtTokenProvider.getUsernameFromToken(token);
                // Buat objek Authentication menggunakan UserId
                Authentication authentication = new UsernamePasswordAuthenticationToken(userId, null);
                System.out.println("masukkk");
                System.out.println(authentication.getName());
                
                auth = authentication;
                return getAuthenticationManager().authenticate(authentication);
            }
        }
        return null;
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            FilterChain chain, Authentication authResult)
            throws IOException, ServletException {
        SecurityContextHolder.getContext().setAuthentication(authResult);
        chain.doFilter(request, response);
    }

	public Authentication getAuth() {
		return auth;
	}
}
