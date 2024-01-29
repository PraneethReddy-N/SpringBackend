package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController 
//here we route all our request from user
public class StudentController {
    
    @Autowired
    private StudentService studentService;

    @PostMapping("/Register")
        public Student saveStudent(@RequestBody Student student){
            System.out.println("in controller" + student.getName() +" " +student.getStudentId());
            return studentService.saveStudent(student);

        }
    
}
