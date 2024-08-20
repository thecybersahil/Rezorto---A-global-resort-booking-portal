package com.examly.springapp.config;
 
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import com.examly.springapp.repository.UserRepo;
import com.examly.springapp.model.User;
 
@Component
public class UserDetailsServiceImpl implements UserDetailsService {
 
    @Autowired
    private UserRepo userRepo;
 
    private static final Logger logger = LoggerFactory.getLogger(UserDetailsServiceImpl.class);
 
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
 
        logger.debug("Entering in loadUserByUsername Method...");
        User user = userRepo.findByEmail(email);
        if(user == null){
            logger.error("Username not found: " + email);
            throw new UsernameNotFoundException("Invalid username");
        }
        logger.info("User Authenticated Successfully..!!!");
        logger.info(user+"");
        return new CustomUserDetails(user);
    }
}
 
 