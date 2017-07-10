package com.tikalk.tutor.rest.request;

import org.hibernate.validator.constraints.NotBlank;

import java.util.List;

/**
 * Created by gaashg on 10-Jul-17.
 */
public class AddTutorRequest {
    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    private List<String> roadMapIdsList;

    @NotBlank
    private String githubUsername;

    public AddTutorRequest(String firstName, String lasstName, List<String> roadMapIdsList, String githubUsername) {
        this.firstName = firstName;
        this.lastName = lasstName;
        this.roadMapIdsList = roadMapIdsList;
        this.githubUsername = githubUsername;
    }

    public AddTutorRequest() {
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

    public List<String> getRoadMapIdsList() {
        return roadMapIdsList;
    }

    public void setRoadMapIdsList(List<String> roadMapIdsList) {
        this.roadMapIdsList = roadMapIdsList;
    }

    public String getGithubUsername() {
        return githubUsername;
    }

    public void setGithubUsername(String githubUsername) {
        this.githubUsername = githubUsername;
    }
}
