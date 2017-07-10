package com.tikalk.tutor.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by gaashg on 10-Jul-17.
 */
@Entity
@Table (name = "tutors")
public class Tutor {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    @Column (name = "github_username")
    private String githubUsername;

    @Column (name = "first_name")
    private String firstName;

    @Column (name = "last_name")
    private String lastName;

    @ElementCollection
    @CollectionTable(name = "tutors_roadmaps", joinColumns = @JoinColumn(name = "tutor_id"))
    private List<Integer> roadmapsList;


    public Tutor(int id, String githubUsername, String firstName, String lastName, List<Integer> roadmapsList) {
        this.id = id;
        this.githubUsername = githubUsername;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roadmapsList = roadmapsList;
    }

    public Tutor() {
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
