package com.tikalk.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tikalk.dto.StudentResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;


/**
 * Created by yaniv on 10/07/2017.
 */
@Service
public class StudenService {
    @Autowired
    private RestClient restClient;

    public StudentResponse getStudentByRoadmap(String roadmapId) {
        String result = restClient.invokeGetApi("/students/" + roadmapId);
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.readValue(result, StudentResponse.class);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
