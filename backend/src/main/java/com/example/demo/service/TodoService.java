package com.example.demo.service;

import com.example.demo.dao.TodoRepository;
import com.example.demo.entity.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    TodoRepository todoRepository;

    public List<Todo> findAllTodo() {
        return todoRepository.findAll();
    }

    public Optional<Todo> findTodoById(int id) {
        return todoRepository.findById(id);
    }

    public void addTodo(Todo todo) {
        todoRepository.save(todo);
    }

    public void updateTodo(int id, Todo newTodo) {
        Todo existingTodo = todoRepository.findById(id).orElseThrow();

        existingTodo.setContent(newTodo.getContent());

        todoRepository.save(newTodo);
    }

    public void deleteTodoById(int id) {
        findTodoById(id);

        todoRepository.deleteById(id);
    }
}
