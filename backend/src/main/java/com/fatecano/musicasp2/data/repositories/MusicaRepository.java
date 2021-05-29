package com.fatecano.musicasp2.data.repositories;

import com.fatecano.musicasp2.domain.models.Musica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MusicaRepository extends JpaRepository<Musica, Integer> {
    Optional<Musica> findFirstById(Integer id);
    void deleteById(Integer id);
}
