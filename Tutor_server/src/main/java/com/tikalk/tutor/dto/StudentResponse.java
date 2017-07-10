package com.tikalk.tutor.dto;

import java.util.List;

/**
 * Created by yaniv on 10/07/2017.
 */
public class StudentResponse extends ExternalResponse {
    private List<Student> studentd;

    public StudentResponse(String message) {
        super(message);
    }

    public List<Student> getStudentd() {
        return studentd;
    }

    public void setStudentd(List<Student> studentd) {
        this.studentd = studentd;
    }
}
