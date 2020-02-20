package com.lucasgabriel.bookstore.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/auth")
    public String authResource() {
        return "Working like a charm";
    }

    @GetMapping("/noauth")
    public String noAuthResource() {
        return "Working like a charm";
    }
}
