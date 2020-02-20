package com.lucasgabriel.bookstore.repository;

import com.lucasgabriel.bookstore.model.JwtRefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RefreshTokenRepository extends JpaRepository<JwtRefreshToken, String> {

}