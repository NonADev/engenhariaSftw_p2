package com.fatecano.musicasp2.domain.interfaces;

import com.fatecano.musicasp2.domain.models.Musica;
import javassist.NotFoundException;

import java.util.List;


public interface MusicaServiceImpl {
    List<Musica> listAll();
    Musica getMusicaById(Integer id) throws NotFoundException;
    Musica salvarMusica(Musica musica);
    Musica updateMusica(Musica musica) throws NotFoundException;
    Musica findFirstByNome(String musica) throws NotFoundException;
    void deleteMusica(Integer id);
}
