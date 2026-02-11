package com.foodapp.food_delivery_backend.controller;



import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_delivery_backend.dto.request.UserCreationRequest;
import com.foodapp.food_delivery_backend.dto.response.UserResponse;
import com.foodapp.food_delivery_backend.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class UserController {
    private final UserService userService;

    @PostMapping
    public UserResponse createUser(@RequestBody @Valid UserCreationRequest request) {
        UserResponse entity = userService.createUser(request);
        return entity;
    }
    
}
