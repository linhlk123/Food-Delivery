package com.foodapp.food_delivery_backend.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.foodapp.food_delivery_backend.dto.request.FoodCreationRequest;
import com.foodapp.food_delivery_backend.dto.response.FoodResponse;
import com.foodapp.food_delivery_backend.entity.Food;
import com.foodapp.food_delivery_backend.mapper.FoodMapper;
import com.foodapp.food_delivery_backend.repository.FoodRepository;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class FoodService {
    FoodRepository foodRepository;
    FoodMapper foodMapper;

    public FoodResponse createFood(FoodCreationRequest request) {
    // 1. Map DTO sang Entity
        Food food = foodMapper.toFood(request);

        // 2. Xử lý ảnh
        if (request.getImage() != null && !request.getImage().isEmpty()) {
            // Tạo tên file duy nhất để không bị trùng
            String fileName = UUID.randomUUID().toString() + "_" + request.getImage().getOriginalFilename();
            
            // Đường dẫn thư mục (Nên tạo folder này ở thư mục gốc dự án)
            String uploadDir = "uploads"; 
            
            try {
                Path uploadPath = Paths.get(uploadDir);
                if (!Files.exists(uploadPath)) {
                    Files.createDirectories(uploadPath); // Tạo thư mục nếu chưa có
                }

                // Lưu file vật lý
                Path filePath = uploadPath.resolve(fileName);
                Files.copy(request.getImage().getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

                // Lưu đường dẫn vào database (để Frontend gọi qua WebMvcConfig)
                food.setImageUrl("/uploads/" + fileName); 
                
            } catch (IOException e) {
                throw new RuntimeException("Could not save image file: " + e.getMessage(), e);
            }
        }

        // 3. Lưu DB và trả về Response
        return foodMapper.toFoodResponse(foodRepository.save(food));
    }
}
