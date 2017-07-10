package com.tikalk.dto;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.JoinColumn;
import java.util.List;

/**
 * Created by gaashg on 10-Jul-17.
 */
public class TutorDto {
    private int id;

    private String githubUsername;

    private String firstName;

    private String lastName;

    private List<Integer> roadmapsList;


    public TutorDto(int id, String githubUsername, String firstName, String lastName, List<Integer> roadmapsList) {
        this.id = id;
        this.githubUsername = githubUsername;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roadmapsList = roadmapsList;
    }

    public TutorDto() {
    }

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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<Integer> getRoadmapsList() {
        return roadmapsList;
    }

    public void setRoadmapsList(List<Integer> roadmapsList) {
        this.roadmapsList = roadmapsList;
    }
}
