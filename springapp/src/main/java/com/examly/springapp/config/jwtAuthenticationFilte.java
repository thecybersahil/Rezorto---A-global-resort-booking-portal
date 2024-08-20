// package com.examly.springapp.config;
 
// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;
 
// import java.io.IOException;
 
// @Component
// public class JwtAuthenticationFilter extends OncePerRequestFilter {
 
//     @Autowired
//     private JwtUtils jwtService;
 
//     @Autowired
//     UserDetailsServiceImpl userDetailsServiceImpl;
 
//     @Override
//     protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
 
//         String authHeader = request.getHeader("Authorization");
//         logger.info("Bearer Token : " + authHeader);
//         String token = null;
//         String username = null;
//         if (authHeader != null && authHeader.startsWith("Bearer ")) {
//             token = authHeader.substring(7);
//             logger.info("Token : " + token);
//             username = jwtService.extractUsername(token);
//             logger.info("Username from token : " + username);
//         }
 
//         if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//             UserDetails userDetails = userDetailsServiceImpl.loadUserByUsername(username);
//             if (jwtService.validateToken(token, userDetails)) {
//                 logger.info("Filter validated successfully");
//                 UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//                 authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                 SecurityContextHolder.getContext().setAuthentication(authenticationToken);
//             } else {
//                 logger.info("Filter validate failed");
//             }
//         }
 
//         filterChain.doFilter(request, response);
//     }
// }