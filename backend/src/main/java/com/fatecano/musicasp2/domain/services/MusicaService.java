package com.fatecano.musicasp2.domain.services;

import com.fatecano.musicasp2.data.repositories.MusicaRepository;
import com.fatecano.musicasp2.domain.interfaces.MusicaServiceImpl;
import com.fatecano.musicasp2.domain.models.Musica;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@Service
@CrossOrigin
public class MusicaService implements MusicaServiceImpl {
    @Autowired
    private MusicaRepository musicaRepository;

    @Override
    public List<Musica> listAll() {
        return musicaRepository.findAll();
    }

    @Override
    public Musica getMusicaById(Integer id) throws NotFoundException {
        Optional<Musica> musica = musicaRepository.findFirstById(id);

        if (musica.isEmpty())
            throw new NotFoundException("Música não encontrada");

        return musicaRepository.findFirstById(id).get();
    }

    @Override
    public Musica salvarMusica(Musica musica) {
        return musicaRepository.save(musica);
    }

    @Override
    public Musica updateMusica(Musica musica) throws NotFoundException {
        if (musicaRepository.findFirstById(musica.getId()).isEmpty())
            throw new NotFoundException("Música não encontrada");

        return musicaRepository.save(musica);
    }

    @Override
    public void deleteMusica(Integer id) {
        musicaRepository.deleteById(id);
    }
}
