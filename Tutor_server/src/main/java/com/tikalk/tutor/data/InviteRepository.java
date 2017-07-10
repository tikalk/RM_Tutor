package com.tikalk.tutor.data;

import com.tikalk.tutor.model.Invite;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by gaashg on 10-Jul-17.
 */
public interface InviteRepository extends JpaRepository <Invite, Invite.InvideId> {
}
