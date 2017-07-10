package com.tikalk.tutor.service;

import com.tikalk.tutor.dto.TutorDto;
import com.tikalk.tutor.intefaces.TutorService;
import com.tikalk.tutor.data.TutorRepository;
import com.tikalk.tutor.model.Tutor;
import org.apache.commons.lang3.StringUtils;
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




        return null;

    }
}
