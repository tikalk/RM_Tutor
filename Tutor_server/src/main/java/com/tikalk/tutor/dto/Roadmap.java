package com.tikalk.tutor.dto;

/**
 * Created by yaniv on 10/07/2017.
 */
public class Roadmap {
    private String title;
    private String version;
    private String author;
    private Integer amountStudents;
    private Integer amountGraduates;
    private Boolean active;
    private Integer rating;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Integer getAmountStudents() {
        return amountStudents;
    }

    public void setAmountStudents(Integer amountStudents) {
        this.amountStudents = amountStudents;
    }

    public Integer getAmountGraduates() {
        return amountGraduates;
    }

    public void setAmountGraduates(Integer amountGraduates) {
        this.amountGraduates = amountGraduates;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }
}
