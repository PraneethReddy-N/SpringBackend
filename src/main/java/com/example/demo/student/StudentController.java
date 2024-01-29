package com.example.demo.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
//here we route all our request from user
public class StudentController {
    

    @GetMapping
    public String StudentInfo(){
        return ":dsd";
    } 
}
