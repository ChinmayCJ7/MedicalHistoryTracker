package com.example.medicalhistory.controller;

import com.example.medicalhistory.model.User;
import com.example.medicalhistory.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository repo;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (repo.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists.");
        }
        return ResponseEntity.ok(repo.save(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> creds) { // cspell:disable-line
        return repo.findByEmail(creds.get("email"))
            .map(user -> user.getPassword().equals(creds.get("password")) ?
                ResponseEntity.ok(user) :
                ResponseEntity.status(401).body("Invalid password"))
            .orElse(ResponseEntity.status(404).body("User not found"));
    }
}
