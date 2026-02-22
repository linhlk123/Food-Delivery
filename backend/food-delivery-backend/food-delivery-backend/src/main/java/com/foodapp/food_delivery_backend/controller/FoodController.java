package com.foodapp.food_delivery_backend.controller;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_delivery_backend.dto.request.ApiResponse;
import com.foodapp.food_delivery_backend.dto.request.FoodCreationRequest;
import com.foodapp.food_delivery_backend.dto.response.FoodResponse;
import com.foodapp.food_delivery_backend.service.FoodService;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@RestController
@RequestMapping("/foods")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class FoodController {
    FoodService foodService;

    @PostMapping(consumes = { org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE })
    public ApiResponse<FoodResponse> createFood(@ModelAttribute FoodCreationRequest request) {
        System.out.println("Tên nhận được: " + request.getName()); // Nếu dòng này in ra null -> Lỗi do React hoặc DTO
        return ApiResponse.<FoodResponse>builder()
                .result(foodService.createFood(request))
                .build();
    }
    
}
