package com.tikalk.rest;

import org.hibernate.validator.constraints.NotBlank;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yaniv on 10/07/2017.
 */
public class InviteTutorRequest {
    @NotBlank
    private String roadmapId;
    private List<String> tutorIds = new ArrayList<>();

    public String getRoadmapId() {
        return roadmapId;
    }

    public void setRoadmapId(String roadmapId) {
        this.roadmapId = roadmapId;
    }

    public List<String> getTutorIds() {
        return tutorIds;
    }

    public void setTutorIds(List<String> tutorIds) {
        this.tutorIds = tutorIds;
    }
}
