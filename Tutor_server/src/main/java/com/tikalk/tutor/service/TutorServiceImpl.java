package com.tikalk.tutor.service;

import com.tikalk.tutor.data.InviteRepository;
import com.tikalk.tutor.dto.TutorDto;
import com.tikalk.tutor.intefaces.TutorService;
import com.tikalk.tutor.data.TutorRepository;
import com.tikalk.tutor.model.Invite;
import com.tikalk.tutor.model.InviteId;
import com.tikalk.tutor.data.FeedbackRepository;
import com.tikalk.tutor.model.Feedback;
import com.tikalk.tutor.model.Tutor;
import com.tikalk.tutor.rest.request.AddTutorRequest;
import com.tikalk.tutor.rest.request.FeedbackRequest;
import com.tikalk.tutor.rest.request.InviteTutorRequest;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by gaashg on 10-Jul-17.
 */
@Component
public class TutorServiceImpl implements TutorService {

    @Resource
    private TutorRepository tutorRepository;

    @Resource
    private InviteRepository inviteRepository;

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Override
    public List<TutorDto> findByName(String firstName, String lastName) {
        List<Tutor> tutorsList = null;

        boolean firstNameEmpty = StringUtils.isEmpty(firstName);
        boolean lastNameEmpty = StringUtils.isEmpty(lastName);

        if (firstNameEmpty && lastNameEmpty)
            tutorsList = tutorRepository.findAll();
        else if (!firstNameEmpty && !lastNameEmpty)
            tutorsList = tutorRepository.findByFirstNameAndLastName(firstName, lastName);
        else if (firstNameEmpty && !lastNameEmpty)
            tutorsList = tutorRepository.findByLastName(lastName);
        else if (!firstNameEmpty && lastNameEmpty)
            tutorsList = tutorRepository.findByFirstName(firstName);

        return tutorsList.stream()
                .map(tutor -> new TutorDto(tutor.getId(), tutor.getGithubUsername(), tutor.getFirstName(), tutor.getLastName(), tutor.getRoadmapsList()))
                .collect(Collectors.toList());
    }

    @Override
    public List<TutorDto> findByRoadmapAndName(String roadmapId, String firstName, String lastName) throws Exception {
        boolean firstNameEmpty = StringUtils.isEmpty(firstName);
        boolean lastNameEmpty = StringUtils.isEmpty(lastName);

        if (firstNameEmpty && lastNameEmpty)
            throw new Exception("Both first and last names can't be null");

        List<Tutor> tutorsList = null;

        if (!firstNameEmpty && !lastNameEmpty)
            tutorsList = tutorRepository.findByFirstNameAndLastNameAndRoadMapId(firstName, lastName, roadmapId);
        else if (firstNameEmpty && !lastNameEmpty)
            tutorsList = tutorRepository.findByLastNameAndRoadMapId(lastName, roadmapId);
        else if (!firstNameEmpty && lastNameEmpty)
            tutorsList = tutorRepository.findByFirstNameAndRoadMapId(firstName, roadmapId);

        return tutorsList.stream()
                .map(tutor -> new TutorDto(tutor.getId(), tutor.getGithubUsername(), tutor.getFirstName(), tutor.getLastName(), tutor.getRoadmapsList()))
                .collect(Collectors.toList());
    }

    @Override
    public void add(AddTutorRequest addTutorRequest) {
        Tutor tutor = new Tutor(addTutorRequest.getGithubUsername(), addTutorRequest.getFirstName(),
                addTutorRequest.getLastName(), addTutorRequest.getRoadMapIdsList());

        tutorRepository.save(tutor);
    }

    @Override
    public void inviteTutor(InviteTutorRequest inviteTutorRequest) throws Exception {

        List<Tutor> tutorsList = tutorRepository.findAllById(inviteTutorRequest.getTutorIds().stream()
                .map(id -> Integer.valueOf(id))
                .collect(Collectors.toList()));

        if (tutorsList.size() != inviteTutorRequest.getTutorIds().size())
            throw new Exception("Not all tutors were found");

        tutorsList.forEach(tutor -> {
            Invite invite = new Invite(new InviteId(tutor.getId(), inviteTutorRequest.getRoadmapId()), false);
            inviteRepository.save(invite);
        });
    }

    @Override
    public void addTutorFeedback(FeedbackRequest feedbackRequest) {
        Feedback feeback = new Feedback();
        feeback.setStudentId(feedbackRequest.getStudentId());
        feeback.setGithubUsername(feedbackRequest.getTutorId());
        feeback.setRating(feedbackRequest.getRate());
        feeback.setComment(feedbackRequest.getComment());
        feedbackRepository.save(feeback);
    }

}
