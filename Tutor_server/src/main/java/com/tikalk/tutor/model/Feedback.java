package com.tikalk.tutor.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by gaashg on 10-Jul-17.
 */
@Entity
@Table (name = "feedbacks")
public class Feedback {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    @Column (name = "github_username")
    private String githubUsername;

    @Column (name = "student_id")
    private String studentId;

    @Column (name = "rating")
    private Integer rating;

    @Column (name = "comment")
    private String comment;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGithubUsername() {
        return githubUsername;
    }

    public void setGithubUsername(String githubUsername) {
        this.githubUsername = githubUsername;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
