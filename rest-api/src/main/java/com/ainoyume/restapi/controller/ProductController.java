package com.ainoyume.restapi.controller;

import com.ainoyume.restapi.model.Product;
import com.ainoyume.restapi.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController extends ApiBaseController{
    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getProducts() { return productRepository.findAll(); }

    @GetMapping("/{id}")
    public Product getProductByID(@PathVariable Long id) {
        return productRepository.findById(id).orElse(null);
    }

    @PostMapping("/{id}")
    public Product addProduct(@PathVariable Product product) {
        return productRepository.save(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        product.setId(id);
        return productRepository.save(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProductByID(@PathVariable Long id) {
        productRepository.deleteById(id);
    }
}
