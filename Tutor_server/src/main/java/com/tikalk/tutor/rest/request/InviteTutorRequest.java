package com.tikalk.tutor.rest.request;

import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.NotEmpty;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yaniv on 10/07/2017.
 */
public class InviteTutorRequest {
    @NotBlank
    private String roadmapId;

    @NotEmpty
    private List<String> tutorIds;

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
