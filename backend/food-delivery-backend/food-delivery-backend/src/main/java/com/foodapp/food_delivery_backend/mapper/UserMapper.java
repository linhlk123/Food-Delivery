package com.foodapp.food_delivery_backend.mapper;

import com.foodapp.food_delivery_backend.dto.request.UserCreationRequest;
import com.foodapp.food_delivery_backend.dto.response.UserResponse;
import com.foodapp.food_delivery_backend.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;


@Mapper(componentModel = "spring")
public interface  UserMapper {
    User toUser(UserCreationRequest request);
    
    @Mapping(source = "id", target = "id")
    UserResponse toUserResponse(User user);
}
