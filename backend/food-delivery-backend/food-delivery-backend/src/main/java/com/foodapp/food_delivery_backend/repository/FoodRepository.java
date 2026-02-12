package com.foodapp.food_delivery_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodapp.food_delivery_backend.entity.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {
    
}
