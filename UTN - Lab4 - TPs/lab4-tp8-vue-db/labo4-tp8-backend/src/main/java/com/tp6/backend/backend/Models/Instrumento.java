package com.tp6.backend.backend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Instrumento {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String instrumento,
    marca, 
    modelo;

    @Column(columnDefinition="TEXT")
    private String imagen;

    private double
    precio,
    costoEnvio;

    private Long cantidadVendida;

    @Column(columnDefinition = "TEXT")
    private String descripcion;
}
