package com.tikalk.rest;

import com.tikalk.entity.Tutor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by yaniv on 10/07/2017.
 */
@RestController
public class TutorController {

    @RequestMapping(value = "/invite", method = RequestMethod.POST)
    public String inviteTutor(@RequestBody InviteTutorRequest inviteTutorRequest) {
        if (inviteTutorRequest.getRoadmapId() == null) {
            return "ERROR invalid road map";
        }

        return "OK";
    }

    @RequestMapping(value = "/tutors", method = RequestMethod.GET)
    @ResponseBody
    public List<Tutor> tutors(@RequestParam String tutorName) {
        return null;
    }

    @RequestMapping(value = "/tutorByRoadmap", method = RequestMethod.GET)
    public void tutorByRoadmap(@RequestParam String roadMapId, @RequestParam String tutorName) {

    }

    @RequestMapping(value = "/tutorFeedback", method = RequestMethod.GET)
    public String tutorFeedback(@RequestParam String studentId, @RequestParam String tutorId,
                                @RequestParam int rate,
                                @RequestParam String comment) {

        return "OK";
    }
}
