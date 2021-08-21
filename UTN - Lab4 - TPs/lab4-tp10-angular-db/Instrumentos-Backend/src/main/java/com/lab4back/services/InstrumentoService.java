package com.lab4back.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lab4back.entities.Instrumento;
import com.lab4back.repositories.InstrumentoRepository;

@Service
public class InstrumentoService implements BaseService<Instrumento> {
	
	@Autowired
	private InstrumentoRepository repository;
	
	@Override // --- FIND ALL ---
	public List<Instrumento> findAll() throws Exception {
		try {
			return repository.findAll();
		} catch(Exception e) {
			throw new Exception(e.getMessage());
		}
	}
	
	@Override // --- FIND BY ID ---
	public Instrumento findById(Long id) throws Exception {
		try {
			Optional<Instrumento> option = repository.findById(id);
			return option.get();
		} catch(Exception e) {
			throw new Exception(e.getMessage());
		}
	}
	
	@Override // --- SAVE ---
	public Instrumento save(Instrumento instrumento) throws Exception {
		try {
			return repository.save(instrumento);
		} catch(Exception e) {
			throw new Exception(e.getMessage());
		}
	}
	
	@Override // --- UPDATE ---
	public Instrumento update(Long id, Instrumento instrumento) throws Exception {
		try {
			Optional<Instrumento> option = repository.findById(id);
			Instrumento data = option.get();
			
			data.setId(id);
			data.setNombre(instrumento.getNombre());
			data.setMarca(instrumento.getMarca());
			data.setImagen(instrumento.getImagen());
			data.setPrecio(instrumento.getPrecio());
			data.setCostoEnvio(instrumento.getCostoEnvio());
			data.setCantVendida(instrumento.getCantVendida());
			data.setDescripcion(instrumento.getDescripcion());
			
			return null;
		} catch(Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	@Override // --- DELETE ---
	public boolean delete(Long id) throws Exception {
		try {
			if(repository.existsById(id)) {
				repository.deleteById(id);
				return true;
			
			} else {
				throw new Exception();
			}			
		} catch(Exception e) {
			throw new Exception(e.getMessage());
		}
	}
}
