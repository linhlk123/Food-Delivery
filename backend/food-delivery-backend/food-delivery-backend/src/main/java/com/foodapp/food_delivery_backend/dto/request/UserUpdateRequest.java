package com.foodapp.food_delivery_backend.dto.request;

import java.time.LocalDate;

import jakarta.validation.constraints.Size;

public class UserUpdateRequest {
    @Size(min = 8, message = "Password must be at least 8 characters long")
    String password;
    
    String firstName;
    String lastName;
    LocalDate dob;
}
