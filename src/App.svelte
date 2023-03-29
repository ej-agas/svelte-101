<script lang="ts">
    import { onMount, tick } from "svelte";
    import TodoList from "./lib/TodoList.svelte";
    import { v4 as uuid } from "uuid";
    import type { Todo } from "./types";
    import Button from "./lib/Button.svelte";

    let todoList: TodoList;

    let isLoading: boolean = false;
    let isAdding: boolean = false;
    let error: string = "";

    let todos: Map<string, Todo> = new Map();

    onMount(() => {
        loadTodos();
    });

    async function loadTodos(): Promise<void> {
        isLoading = true;
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );

        if (!response.ok) {
            isLoading = false;
            error = `${response.status} ${response.statusText}`;
            return;
        }

        const json = await response.json();

        todos = new Map(todos);
        json.forEach((todo) => {
            todos.set(todo.id, {
                id: todo.id,
                text: todo.title,
                done: false,
            });
        });
        isLoading = false;
    }

    async function addTodo(event: CustomEvent<{ text: string }>) {
        event.preventDefault();
        isAdding = true;
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos",
            {
                method: "POST",
                body: JSON.stringify({
                    text: event.detail.text,
                    done: false,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }
        );

        if (!response.ok) {
            isLoading = false;
            isAdding = false;
            error = `${response.status} ${response.statusText}`;
            return;
        }

        const todo = await response.json();

        todos = new Map(todos);
        const id = uuid();
        todos.set(id, {
            id: id,
            text: todo.text,
            done: todo.done,
        });
        todoList.clearInput();
        isAdding = false;
        await tick(); // wait for the DOM to update
        todoList.focusInput();
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

{#if isLoading}
    <p class="state-text">Loading...</p>
{:else if error}
    <p class="state-text">{error}</p>
{:else}
    <h1 style:text-align="center">Todos</h1>
    <TodoList
        todos="{todos}"
        disableAdding="{isAdding}"
        bind:this="{todoList}"
        on:addTodo="{addTodo}"
        on:deleteTodo="{deleteTodo}"
        on:toggleTodo="{toggleTodo}"
    />
{/if}

<style>
    .state-text {
        margin: 0;
        padding: 15px;
        text-align: center;
    }
</style>
