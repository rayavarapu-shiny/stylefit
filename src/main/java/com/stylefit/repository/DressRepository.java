package com.stylefit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stylefit.model.Dress;

public interface DressRepository extends JpaRepository<Dress, Long> {

}