package com.foodapp.food_delivery_backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.foodapp.food_delivery_backend.dto.request.FoodCreationRequest;
import com.foodapp.food_delivery_backend.dto.response.FoodResponse;
import com.foodapp.food_delivery_backend.entity.Food;

@Mapper(componentModel = "spring")
public interface FoodMapper {
    @Mapping(target = "imageUrl", ignore = true)
    @Mapping(target = "id", ignore = true)
    Food toFood(FoodCreationRequest request);
    FoodResponse toFoodResponse(Food food);
}
