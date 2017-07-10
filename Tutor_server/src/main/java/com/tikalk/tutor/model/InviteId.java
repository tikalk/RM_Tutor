package com.tikalk.tutor.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

/**
 * Created by gaashg on 10-Jul-17.
 */
@Embeddable
public class InviteId implements Serializable {
    @Column(name = "tutor_id")
    private Integer tutorId;

    @Column (name = "roadmap_id")
    private String roadmapId;

    public InviteId(Integer tutorId, String roadmapId) {
        this.tutorId = tutorId;
        this.roadmapId = roadmapId;
    }

    public InviteId() {
    }

    public Integer getTutorId() {
        return tutorId;
    }

    public void setTutorId(Integer tutorId) {
        this.tutorId = tutorId;
    }

    public String getRoadmapId() {
        return roadmapId;
    }

    public void setRoadmapId(String roadmapId) {
        this.roadmapId = roadmapId;
    }
}
