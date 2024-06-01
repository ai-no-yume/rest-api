package com.ainoyume.restapi.controller;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RestController;

@RestController
@ControllerAdvice
@OpenAPIDefinition(
        info = @Info (
                title = "ainoyume company API",
                version =  "1.o",
                description = "API para manejo de clientes y productos de una microempresa"
        ),
        tags = {
                @Tag(
                        name = "Base controller",
                        description = "Base controller for the API, this extends for all endpoints"
                )
        }
)
public class ApiBaseController {
}
