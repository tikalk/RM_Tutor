package com.tikalk.tutor.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by gaashg on 10-Jul-17.
 */
@Entity
@Table(name = "invites")
public class Invite {

    @EmbeddedId
    private InvideId id;

    @Column (name = "accepted")
    private Boolean accepted;

    public Invite(InvideId invideId, Boolean accepted) {
        this.id = invideId;
        this.accepted = accepted;
    }

    public Invite() {
    }

    public InvideId getId() {
        return id;
    }

    public void setId(InvideId id) {
        this.id = id;
    }

    public Boolean getAccepted() {
        return accepted;
    }

    public void setAccepted(Boolean accepted) {
        this.accepted = accepted;
    }

    @Embeddable
    public class InvideId implements Serializable {
        @Column (name = "tutor_id")
        private Integer tutorId;

        @Column (name = "roadmap_id")
        private Integer roadmapId;

        public InvideId(Integer tutorId, Integer roadmapId) {
            this.tutorId = tutorId;
            this.roadmapId = roadmapId;
        }

        public InvideId() {
        }

        public Integer getTutorId() {
            return tutorId;
        }

        public void setTutorId(Integer tutorId) {
            this.tutorId = tutorId;
        }

        public Integer getRoadmapId() {
            return roadmapId;
        }

        public void setRoadmapId(Integer roadmapId) {
            this.roadmapId = roadmapId;
        }
    }
}
