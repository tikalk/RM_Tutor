package com.tikalk.tutor.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tikalk.tutor.dto.RoadmapResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

/**
 * Created by yaniv on 10/07/2017.
 */
@Service
public class AuthorService {
    @Autowired
    private RestClient restClient;

    public RoadmapResponse searchRoadmap(String query) {
        String result = restClient.invokeGetApi("/roadmaps/q=" + query);
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.readValue(result, RoadmapResponse.class);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
