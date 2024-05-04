package com.ainoyume.restapi.repository;

import com.ainoyume.restapi.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
