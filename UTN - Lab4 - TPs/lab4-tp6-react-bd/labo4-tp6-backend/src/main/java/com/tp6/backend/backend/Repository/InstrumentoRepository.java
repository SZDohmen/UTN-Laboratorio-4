package com.tp6.backend.backend.Repository;

import com.tp6.backend.backend.Models.Instrumento;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins="http://localhost:3000")
@RepositoryRestResource(collectionResourceRel = "instrumentos", path="instrumentos")
public interface InstrumentoRepository extends PagingAndSortingRepository<Instrumento,Long> {
    
}
