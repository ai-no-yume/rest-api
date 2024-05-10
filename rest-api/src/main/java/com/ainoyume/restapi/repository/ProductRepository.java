package com.ainoyume.restapi.repository;

import com.ainoyume.restapi.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
