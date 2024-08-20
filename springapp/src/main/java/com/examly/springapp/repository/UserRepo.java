package com.examly.springapp.repository;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
 
import com.examly.springapp.model.User;
 
@Repository
public interface UserRepo extends JpaRepository<User,Long> {
    @Query(value = "select u from User u where u.username = ?1")
    User findByUsername(String username);
 
    @Query(value = "select u from User u where u.email = ?1")
    User findByEmail(String email);
}