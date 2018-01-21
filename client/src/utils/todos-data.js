import axios from 'axios';
let todos = [];
let todosFetched = false;

export function fetchTodos () {
  if (todosFetched) return Promise.resolve(todos);
  return axios.get('/todos')
    .then((response) => {
      todos = response.data;
      todosFetched = true;

      return todos;
    });
};

export const createTodo = (todoData) => {
  return axios.post('/todos', todoData)
    .then((response) => {
      const todo = response.data;
      todos = [...todos, todo];

      return todo;
    });
};

export const getSingleTodo = (id) => {
  if (todosFetched) return Promise.resolve(todos.find((todo) => todo.id === id));

  return axios.get('/todos')
    .then((response) => {
      todos = response.data;
      todosFetched = true;

      return todos.find((todo) => todo.id === id);
    });
};

export const removeTodo = (id) => {
  return axios.delete(`/todos/${id}`)
    .then(() => {
      todos = todos.filter((todo) => todo.id !== id);

      return todos;
    });
};