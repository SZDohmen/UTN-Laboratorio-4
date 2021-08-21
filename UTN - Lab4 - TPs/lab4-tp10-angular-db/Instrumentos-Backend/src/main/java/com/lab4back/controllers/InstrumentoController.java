package com.lab4back.controllers;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lab4back.entities.Instrumento;
import com.lab4back.services.InstrumentoService;

@RestController
@RequestMapping(path="lab4-back/instrumentos")
@CrossOrigin(origins="*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class InstrumentoController {

	@Autowired
	private InstrumentoService service;
	
	@GetMapping("/") // --- GET ALL ---
	@Transactional
	public ResponseEntity<?> getAll() {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.findAll());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error al buscar registros");
		}
	}
	
	@GetMapping("/{id}") // --- GET ONE ---
	@Transactional
	public ResponseEntity<?> getOne(@PathVariable Long id){
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.findById(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Registro no encontrado");
		}
	}
	
	@PostMapping("/") // --- POST ---
	@Transactional
	public ResponseEntity<?> post(@RequestBody Instrumento instrumento){
		try {
			service.save(instrumento);
			return ResponseEntity.status(HttpStatus.OK).body("Registro guardado");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al crear registro");
		}
	}
	
	@PutMapping("/{id}") // --- PUT ---
	@Transactional
	public ResponseEntity<?> put(@PathVariable Long id, @RequestBody Instrumento instrumento){
		try {
			service.update(id, instrumento);
			return ResponseEntity.status(HttpStatus.OK).body("Registro actualizado");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al actualziar registro");
		}
	}
	
	@DeleteMapping("/{id}") // --- DELETE ---
	@Transactional
	public ResponseEntity<?> delete(@PathVariable Long id){
		try {
			service.delete(id);
			return ResponseEntity.status(HttpStatus.OK).body("Registro eliminado");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al eliminar registro");
		}
	}
	
	
	
	
	
}
