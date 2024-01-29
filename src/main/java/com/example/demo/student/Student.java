package com.example.demo.student;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;

@Entity
//represent, hold or transfer
public class Student {
    @Id
    private Long studentId;
    private String name;
    private String email;
    private String password;
    

    public Student() {
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Student(Long studentId,
                String name,
                  String email,String password) {
        this.studentId = studentId;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    @Override
    public String toString() {
        return "Student [id=" + studentId + ", name=" + name + ", email=" + email + "]";
    }
    
}
