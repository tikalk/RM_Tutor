package com.tikalk.tutor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Created by gaashg on 10-Jul-17.
 */
@Configuration
@ComponentScan (basePackages = {"com.tikalk.tutor"})
@EnableAutoConfiguration
@SpringBootApplication
public class TutorApplication {

    public static void main(String[] args) {
        SpringApplication.run(TutorApplication.class, args);
    }
}