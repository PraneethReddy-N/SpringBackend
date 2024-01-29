package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	// @CrossOrigin(origins = "http://localhost:3000") // Use your frontend's origin here
	// @GetMapping
	// public String hello(@RequestParam(name = "name", defaultValue = "noOne")String name){
	// 	return "hello welcome " + name;
	// }

}
