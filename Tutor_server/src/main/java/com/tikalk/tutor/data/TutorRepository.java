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
    List<Tutor> findByName(@Param("firstName") String firstName, @Param("lastName") String lastName);

}
