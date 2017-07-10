package com.tikalk.tutor.rest;

import com.tikalk.tutor.dto.*;
import com.tikalk.tutor.intefaces.TutorService;
import com.tikalk.tutor.rest.request.AddTutorRequest;
import com.tikalk.tutor.rest.request.InviteTutorRequest;
import com.tikalk.tutor.service.AuthorService;
import com.tikalk.tutor.service.StudentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by yaniv on 10/07/2017.
 */
@RestController
@RequestMapping(value = "/tutor")
public class TutorController {
    Logger logger = LoggerFactory.getLogger(TutorController.class);
    @Autowired
    private StudentService studentService;
    @Autowired
    private AuthorService authorService;

    @Resource
    private TutorService tutorService;


    @RequestMapping (value = "", method = RequestMethod.POST)
    public @ResponseBody String add (@RequestBody @Validated AddTutorRequest addTutorRequest){
        tutorService.add (addTutorRequest);
        return "OK";
    }

    @RequestMapping(value = "/invite", method = RequestMethod.POST)
    public String inviteTutor(@RequestBody @Validated InviteTutorRequest inviteTutorRequest) throws Exception {
        tutorService.inviteTutor (inviteTutorRequest);
        return "OK";
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    @ResponseBody
    public List<TutorDto> tutors(@RequestParam (required = false) String firstName, @RequestParam (required = false) String lastName) {

        return tutorService.findByName (firstName, lastName);
    }

    @RequestMapping(value = "/byRoadmap", method = RequestMethod.GET)
    public List<TutorDto> tutorByRoadmap(@RequestParam String roadmapId, @RequestParam (required = false) String firstName,
                               @RequestParam (required = false) String lastName) throws Exception {
        return tutorService.findByRoadmapAndName(roadmapId, firstName, lastName);
    }

    @RequestMapping(value = "/feedback", method = RequestMethod.GET)
    public String tutorFeedback(@RequestParam String studentId, @RequestParam String tutorId,
                                @RequestParam int rate,
                                @RequestParam String comment) {
        tutorService.addTutorFeedback(studentId, tutorId, rate, comment);

        return "OK";
    }

    @RequestMapping(value = "/roadmapStudents", method = RequestMethod.GET)
    public List<Student> roadmapStudents(@RequestParam String roadmapId){
        StudentResponse studentByRoadmap = studentService.getStudentByRoadmap(roadmapId);
        if (studentByRoadmap != null) {
            return  studentByRoadmap.getStudentd();
        }
        logger.error("Failed to process roadmapStudents request");
        return null;
    }

    @RequestMapping(value = "/roadmap", method = RequestMethod.GET)
    public List<Roadmap> roadmap(@RequestParam String roadmap){
        RoadmapResponse roadmapResponse = authorService.searchRoadmap(roadmap);
        if (roadmapResponse != null) {
            return  roadmapResponse.getRoadmapList();
        }
        logger.error("Failed to process roadmapStudents request");
        return null;
    }

}
