<script lang="ts">
    import TodoList from "./lib/TodoList.svelte";
    import { v4 as uuid } from "uuid";
    import type { Todo } from "./types";

    let todos: Map<string, Todo> = new Map();

    function addTodo(event: CustomEvent<{ text: string }>) {
        const id = uuid();
        todos = new Map(todos)
        todos = todos.set(id, {
            id: id,
            text: event.detail.text,
            done: false
        })
    }

    function deleteTodo(event: CustomEvent<{ id: string }>) {
        todos = new Map(todos)
        todos.delete(event.detail.id)
    }

    function toggleTodo(event: CustomEvent<{ id: string, done: boolean }>) {
        todos = new Map(todos)
        const todo = todos.get(event.detail.id)

        if (!todo) return;

        todos.set(event.detail.id, {
            ...todo,
            done: event.detail.done
        })
    }

    $: console.table(todos)
</script>

<h1>{todos.size} Todos</h1>
<TodoList
    {todos}
    on:addTodo={addTodo}
    on:deleteTodo={deleteTodo}
    on:toggleTodo={toggleTodo}
/>
