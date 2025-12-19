package com.example.demo.controller;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Person;
import com.example.demo.repository.PersonRepository;

import java.util.List;

@RestController
@RequestMapping("/api/persons")
@CrossOrigin(origins = "http://localhost:53965")
public class PersonController {

    private final PersonRepository repo;

    public PersonController(PersonRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Person> getAll() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Person> getOne(@PathVariable Long id) {
        return repo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Person> add(@RequestBody Person person) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(repo.save(person));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Person> update(
            @PathVariable Long id,
            @RequestBody Person updatedPerson) {

        return repo.findById(id)
                .map(person -> {
                    person.setFirstName(updatedPerson.getFirstName());
                    person.setFamilyName(updatedPerson.getFamilyName());
                    person.setAge(updatedPerson.getAge());
                    person.setCity(updatedPerson.getCity());
                    person.setStreet(updatedPerson.getStreet());
                    person.setPostCode(updatedPerson.getPostCode());

                    return ResponseEntity.ok(repo.save(person));
                })
                .orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
