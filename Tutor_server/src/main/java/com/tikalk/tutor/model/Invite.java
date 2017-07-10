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
    private InviteId id;

    @Column (name = "accepted")
    private Boolean accepted;

    public Invite(InviteId invideId, Boolean accepted) {
        this.id = invideId;
        this.accepted = accepted;
    }

    public Invite() {
    }

    public InviteId getId() {
        return id;
    }

    public void setId(InviteId id) {
        this.id = id;
    }

    public Boolean getAccepted() {
        return accepted;
    }

    public void setAccepted(Boolean accepted) {
        this.accepted = accepted;
    }

}
