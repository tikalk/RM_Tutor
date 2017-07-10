package com.tikalk.tutor.intefaces;

import com.tikalk.tutor.dto.TutorDto;

import java.util.List;

/**
 * Created by gaashg on 10-Jul-17.
 */
public interface TutorService {
    List<TutorDto> findByName(String firstName, String lastName);

    List<TutorDto> findByRoadmapAndName(String roadmapId, String firstName, String lastName) throws Exception;
}
