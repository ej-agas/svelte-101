<script lang="ts">
    import TodoList from "./lib/TodoList.svelte";
    import { v4 as uuid } from "uuid";
    import type { Todo } from "./types";
    import Button from "./lib/Button.svelte";

    let todoList: TodoList;
    let showList: boolean = true;

    let todos: Map<string, Todo> = new Map();

    function addTodo(event: CustomEvent<{ text: string }>) {
        event.preventDefault();
        todos = new Map(todos);
        const id = uuid();
        todos.set(id, {
            id: id,
            text: event.detail.text,
            done: false,
        });
        todoList.clearInput();
    }

    function deleteTodo(event: CustomEvent<{ id: string }>) {
        todos = new Map(todos);
        todos.delete(event.detail.id);
        console.log(event.detail.id);
        console.table(todos);
    }

    function toggleTodo(event: CustomEvent<{ id: string; done: boolean }>) {
        todos = new Map(todos);
        const todo = todos.get(event.detail.id);

        if (!todo) return;

        todos.set(event.detail.id, {
            ...todo,
            done: event.detail.done,
        });
    }
</script>

<label>
    <input type="checkbox" bind:checked="{showList}" />
    Show/Hide Todo List
</label>
{#if showList}
    <h1>{todos.size} Todos</h1>
    <TodoList
        todos="{todos}"
        bind:this="{todoList}"
        on:addTodo="{addTodo}"
        on:deleteTodo="{deleteTodo}"
        on:toggleTodo="{toggleTodo}"
    />

    <Button on:click="{() => todoList.focusInput()}">Focus</Button>
{/if}
