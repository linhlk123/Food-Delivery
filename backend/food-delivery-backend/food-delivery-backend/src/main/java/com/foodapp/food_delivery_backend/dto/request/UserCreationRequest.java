package com.foodapp.food_delivery_backend.dto.request;

import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class UserCreationRequest {
    @Size(min = 5, message = "EMAIL_TOO_SHORT")
    String email;

    @Size(min = 8, message = "PASSWORD_TOO_SHORT")
    String password;
    String firstName;
    String lastName;
    String dob;
}
