package com.tikalk.dto;

/**
 * Created by yaniv on 10/07/2017.
 */
public class Student {
    private String id;
    private String name;
    private String gitUser;
    private String repository;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGitUser() {
        return gitUser;
    }

    public void setGitUser(String gitUser) {
        this.gitUser = gitUser;
    }

    public String getRepository() {
        return repository;
    }

    public void setRepository(String repository) {
        this.repository = repository;
    }
}
