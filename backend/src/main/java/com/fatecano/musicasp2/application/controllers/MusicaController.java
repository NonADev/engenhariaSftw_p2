package com.fatecano.musicasp2.application.controllers;

import com.fatecano.musicasp2.domain.interfaces.MusicaServiceImpl;
import com.fatecano.musicasp2.domain.models.Musica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class MusicaController {
    @Autowired
    private MusicaServiceImpl musicaService;

    @GetMapping("/musicas")
    public ResponseEntity<?> listMusicas() {
        try {
            return ResponseEntity.ok(musicaService.listAll());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Error(e));
        }
    }

    @GetMapping("/procurapornome")
    public ResponseEntity<?> procuraPorNome(@RequestParam String nome) {
        try {
            return ResponseEntity.ok(musicaService.findFirstByNome(nome));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Error(e));
        }
    }

    @PostMapping("/insert")
    public ResponseEntity<?> insertMusica(@RequestBody Musica musica) {
        try {
            return ResponseEntity.ok(musicaService.salvarMusica(musica));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Error(e));
        }
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateMusica(@RequestBody Musica musica) {
        try {
            return ResponseEntity.ok(musicaService.updateMusica(musica));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Error(e));
        }
    }

    @GetMapping("/findbyid")
    public ResponseEntity<?> findMusica(@RequestParam int id) {
        try {
            return ResponseEntity.ok(musicaService.getMusicaById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Error(e));
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteMusica(@RequestParam int id) {
        try {
            musicaService.deleteMusica(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Error(e));
        }
    }
}
