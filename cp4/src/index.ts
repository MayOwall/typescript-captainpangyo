/* eslint-disable @typescript-eslint/no-unused-vars */
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[];

function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter((item: Todo) => item.done);
}

function addTwoTodoItems(todo1: Todo, todo2: Todo): void {
  todoItems = [...todoItems, todo1, todo2];
}

function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();

const todo1: Todo = {
  id: 4,
  title: "클라이밍",
  done: false,
};
const todo2: Todo = {
  id: 5,
  title: "요리",
  done: false,
};

addTwoTodoItems(todo1, todo2);
log();
