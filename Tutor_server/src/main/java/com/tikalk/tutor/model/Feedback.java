package com.tikalk.tutor.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by gaashg on 10-Jul-17.
 */
@Entity
@Table (name = "feedbacks")
public class Feedback {

    @EmbeddedId
    private FeedbackId id;

    @Column (name = "feedback")
    private String feedback;

    public Feedback(FeedbackId id, String feedback) {
        this.id = id;
        this.feedback = feedback;
    }

    public Feedback() {
    }

    public FeedbackId getId() {
        return id;
    }

    public void setId(FeedbackId id) {
        this.id = id;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    @Embeddable
    public class FeedbackId implements Serializable {
        @Column (name = "student_id")
        private Integer studentId;

        @Column (name = "tutor_id")
        private Integer tutorId;

        public FeedbackId(Integer studentId, Integer tutorId) {
            this.studentId = studentId;
            this.tutorId = tutorId;
        }

        public FeedbackId() {
        }

        public Integer getStudentId() {
            return studentId;
        }

        public void setStudentId(Integer studentId) {
            this.studentId = studentId;
        }

        public Integer getTutorId() {
            return tutorId;
        }

        public void setTutorId(Integer tutorId) {
            this.tutorId = tutorId;
        }
    }

}
