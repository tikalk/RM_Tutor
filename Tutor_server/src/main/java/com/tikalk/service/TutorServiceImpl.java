package com.tikalk.service;

import com.tikalk.dto.TutorDto;
import com.tikalk.intefaces.TutorService;
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

        if (StringUtils.isEmpty(firstName) && StringUtils.isEmpty(lastName))
            tutorsList = tutorRepository.findAll();
        else
            tutorsList = tutorRepository.findByName(firstName, lastName);

        return tutorsList.stream()
                .map(tutor -> new TutorDto(tutor.getId(), tutor.getGithubUsername(), tutor.getFirstName(), tutor.getLastName(), tutor.getRoadmapsList()))
                .collect(Collectors.toList());
    }
}
