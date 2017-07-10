package com.tikalk.tutor.dto;

import java.util.List;

/**
 * Created by yaniv on 10/07/2017.
 */
public class RoadmapResponse extends ExternalResponse {
    private List<Roadmap> roadmapList;

    public RoadmapResponse(String message) {
        super(message);
    }

    public List<Roadmap> getRoadmapList() {
        return roadmapList;
    }

    public void setRoadmapList(List<Roadmap> roadmapList) {
        this.roadmapList = roadmapList;
    }
}
