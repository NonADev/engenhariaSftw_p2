package com.fatecano.musicasp2.domain.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Musica {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String nomeMusica;
    private String nomeAutor;
    private int anoLancamento;

    public Musica(){

    }

    public Musica(Integer id, String nomeMusica, String nomeAutor, int anoLancamento) {
        this.id = id;
        this.nomeMusica = nomeMusica;
        this.nomeAutor = nomeAutor;
        this.anoLancamento = anoLancamento;
    }
}
