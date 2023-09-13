package com.tutkuince.libraryApp.config;

import com.tutkuince.libraryApp.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {
    private String allowedOrigins = "http://localhost:3030";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] unsupportedActions = {
                HttpMethod.POST,
                HttpMethod.PATCH,
                HttpMethod.PATCH,
                HttpMethod.PUT
        };
        config.exposeIdsFor(Book.class);
        
        disableHttpMethods(Book.class, config, unsupportedActions);

        // Configure CORS Mapping
        cors.addMapping(config.getBasePath() + "/**")
                .allowedOrigins(allowedOrigins).allowedHeaders("*");
    }

    private void disableHttpMethods(Class theClass, RepositoryRestConfiguration config, HttpMethod[] unsupportedActions) {
        config.getExposureConfiguration()
                .forDomainType(theClass)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(unsupportedActions)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(unsupportedActions)));
    }
}
