package com.tikalk.intefaces;

import com.tikalk.dto.TutorDto;

import java.util.List;

/**
 * Created by gaashg on 10-Jul-17.
 */
public interface TutorService {
    List<TutorDto> findByName(String firstName, String lastName);
}
