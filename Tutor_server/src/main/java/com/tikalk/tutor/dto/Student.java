package com.tikalk.tutor.dto;

/**
 * Created by yaniv on 10/07/2017.
 */
public class Student {
    private String _id;
    private String name;
    private String gitHubId;
    private String gitRepo;

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGitHubId() {
        return gitHubId;
    }

    public void setGitHubId(String gitHubId) {
        this.gitHubId = gitHubId;
    }

    public String getGitRepo() {
        return gitRepo;
    }

    public void setGitRepo(String gitRepo) {
        this.gitRepo = gitRepo;
    }
}
