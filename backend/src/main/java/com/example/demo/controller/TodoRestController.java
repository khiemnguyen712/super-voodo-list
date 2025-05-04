package com.example.demo.controller;

import com.example.demo.entity.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.service.TodoService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/todos")
public class TodoRestController {

    @Autowired
    private TodoService todoService;

    @GetMapping
    public List<Todo> getAllTodo() {
        return todoService.findAllTodo();
    }

    @GetMapping("/{id}")
    public Optional<Todo> getTodoById(@PathVariable int id) {
        return todoService.findTodoById(id);
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        todoService.addTodo(todo);

        return todo;
    }

    @PutMapping("/{id}")
    public void updateTodo(@PathVariable int id, @RequestBody Todo todo) {
        todoService.updateTodo(id, todo);
    }

    @DeleteMapping("/{id}")
    public void deleteStudentById(@PathVariable int id) {
        todoService.deleteTodoById(id);
    }
}
