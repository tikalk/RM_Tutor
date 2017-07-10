package com.tikalk.tutor.data;

import com.tikalk.tutor.model.Invite;
import com.tikalk.tutor.model.InviteId;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by gaashg on 10-Jul-17.
 */
public interface InviteRepository extends JpaRepository <Invite, InviteId> {
}
