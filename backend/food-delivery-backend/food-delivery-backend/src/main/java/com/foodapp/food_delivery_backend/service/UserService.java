package com.foodapp.food_delivery_backend.service;

import org.springframework.stereotype.Service;

import com.foodapp.food_delivery_backend.dto.request.UserCreationRequest;
import com.foodapp.food_delivery_backend.dto.response.UserResponse;
import com.foodapp.food_delivery_backend.entity.User;
import com.foodapp.food_delivery_backend.mapper.UserMapper;
import com.foodapp.food_delivery_backend.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class UserService {
    UserRepository userRepository;
    UserMapper userMapper;
    PasswordEncoder passwordEncoder;

    public UserResponse createUser(UserCreationRequest request) {
        if(userRepository.existsByName(request.getEmail())) {
            throw new IllegalArgumentException("USER_ALREADY_EXISTS");
        }

        User user = userMapper.toUser(request);
        //encrypt password
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user = userRepository.save(user);
        return userMapper.toUserResponse(user);
    }
}
