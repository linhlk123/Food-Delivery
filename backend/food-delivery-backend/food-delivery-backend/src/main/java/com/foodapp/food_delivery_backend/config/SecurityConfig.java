package com.foodapp.food_delivery_backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // Nếu bạn gọi API từ React/Vite thì thường cần bật CORS
            .cors(Customizer.withDefaults())

            // REST API thì thường tắt CSRF (vì không dùng form login)
            .csrf(csrf -> csrf.disable())

            // Cho phép tất cả request (tạm thời)
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll()
            )

            // Không tạo session (chuẩn REST)
            .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
