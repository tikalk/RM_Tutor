package com.tikalk.rest;

import com.tikalk.dto.TutorDto;
import com.tikalk.intefaces.TutorService;
import com.tikalk.tutor.model.Tutor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by yaniv on 10/07/2017.
 */
@RestController
public class TutorController {

    @Resource
    private TutorService tutorService;


    @RequestMapping(value = "/invite", method = RequestMethod.POST)
    public String inviteTutor(@RequestBody @Validated InviteTutorRequest inviteTutorRequest) {

        return "OK";
    }

    @RequestMapping(value = "/tutors", method = RequestMethod.GET)
    @ResponseBody
    public List<TutorDto> tutors(@RequestParam String firstName, @RequestParam String lastName) {

        return tutorService.findByName (firstName, lastName);
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
