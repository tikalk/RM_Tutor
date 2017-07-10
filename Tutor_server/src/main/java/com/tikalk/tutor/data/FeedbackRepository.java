package com.tikalk.tutor.data;

import com.tikalk.tutor.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by gaashg on 10-Jul-17.
 */
public interface FeedbackRepository extends JpaRepository <Feedback, Feedback.FeedbackId> {
}
