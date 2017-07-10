package com.tikalk.tutor.data;

import com.tikalk.tutor.model.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by gaashg on 10-Jul-17.
 */
public interface TutorRepository extends JpaRepository <Tutor, Integer> {
}
