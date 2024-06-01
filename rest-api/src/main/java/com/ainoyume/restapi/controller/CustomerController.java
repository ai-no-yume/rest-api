package com.ainoyume.restapi.controller;

import com.ainoyume.restapi.model.Customer;
import com.ainoyume.restapi.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController extends ApiBaseController{
    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping
    public List<Customer> getCustomers() { return customerRepository.findAll(); }

    @GetMapping("/{id}")
    public Customer getCustomerByID(@PathVariable Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    @PostMapping("/{id}")
    public Customer addCustomer(@PathVariable Customer customer) { // Consider to make customer "global" if it will be used after
        return customerRepository.save(customer);
    }

    @PutMapping("/{id}")
    public Customer updateCustomer(@PathVariable Long id, @RequestBody Customer customer) {
        customer.setId(id);
        return customerRepository.save(customer);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomerByID(@PathVariable Long id) {
        customerRepository.deleteById(id);
    }
}
