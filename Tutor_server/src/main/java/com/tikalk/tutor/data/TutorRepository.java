package com.tikalk.tutor.data;

import com.tikalk.tutor.model.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by gaashg on 10-Jul-17.
 */
public interface TutorRepository extends JpaRepository <Tutor, Integer> {
    @Query (value = "Select t from Tutor t where t.firstName = :firstName and t.lastName = :lastName")
    List<Tutor> findByFirstNameAndLastName(@Param("firstName") String firstName, @Param("lastName") String lastName);

    @Query (value = "Select t from Tutor t where t.firstName = :firstName")
    List<Tutor> findByFirstName(@Param("firstName") String firstName);

    @Query (value = "Select t from Tutor t where t.lastName = :lastName")
    List<Tutor> findByLastName(@Param("lastName") String lastName);

    @Query (value = "Select t from Tutor t JOIN t.roadmapsList r where t.firstName = :firstName and t.lastName = :lastName and r = :roadMapId")
    List<Tutor> findByFirstNameAndLastNameAndRoadMapId(@Param("firstName") String firstName,
                                                       @Param("lastName") String lastName, @Param("roadMapId") String roadMapId);

    @Query (value = "Select t from Tutor t JOIN t.roadmapsList r where t.firstName = :firstName and r = :roadMapId")
    List<Tutor> findByFirstNameAndRoadMapId(@Param("firstName") String firstName, @Param("roadMapId") String roadMapId);

    @Query (value = "Select t from Tutor t JOIN t.roadmapsList r where t.lastName = :lastName and r = :roadMapId")
    List<Tutor> findByLastNameAndRoadMapId(@Param("lastName") String lastName, @Param("roadMapId") String roadMapId);

    @Query (value = "Select t from Tutor t where t.id in :tutorsIdsList")
    List<Tutor> findAllById(@Param("tutorsIdsList") List<Integer> tutorIdsList);
}
