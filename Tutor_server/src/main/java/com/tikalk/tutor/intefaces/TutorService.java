package com.tikalk.tutor.intefaces;

import com.tikalk.tutor.dto.TutorDto;
import com.tikalk.tutor.rest.request.AddTutorRequest;
import com.tikalk.tutor.rest.request.FeedbackRequest;
import com.tikalk.tutor.rest.request.InviteTutorRequest;

import java.util.List;

/**
 * Created by gaashg on 10-Jul-17.
 */
public interface TutorService {
    List<TutorDto> findByName(String firstName, String lastName);

    List<TutorDto> findByRoadmapAndName(String roadmapId, String firstName, String lastName) throws Exception;

    void add(AddTutorRequest addTutorRequest);

    void inviteTutor(InviteTutorRequest inviteTutorRequest) throws Exception;

    void addTutorFeedback(FeedbackRequest feedbackRequest);
}
