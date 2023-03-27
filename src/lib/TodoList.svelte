<svelte:options immutable="{true}" />

<script lang="ts">
    import type { Todo } from "src/types";
    import Button from "./Button.svelte";
    import { createEventDispatcher, afterUpdate, beforeUpdate } from "svelte";

    afterUpdate(() => {
        if (autoScroll) {
            listDiv.scrollTo(0, listDivOffsetHeight);
        }
        autoScroll = false;
    });

    export let todos: Map<string, Todo> = new Map();
    let previousTodos: Map<string, Todo> = todos;
    let autoScroll: boolean = false;

    let inputText: string = "";
    let input: HTMLInputElement;
    let listDiv: HTMLDivElement;
    let listDivOffsetHeight: number;

    $: {
        autoScroll = todos.size > previousTodos.size;
        previousTodos = todos;
    }

    export function clearInput() {
        inputText = "";
    }

    export function focusInput() {
        input.focus();
    }

    const dispatch = createEventDispatcher();

    function addTodo() {
        const isNotCancelled = dispatch(
            "addTodo",
            { text: inputText },
            { cancelable: true }
        );

        if (isNotCancelled) {
            inputText = "";
        }
    }

    function deleteTodo(id: string) {
        dispatch("deleteTodo", { id: id });
    }

    function toggleTodo(id: string, done: boolean) {
        dispatch("toggleTodo", { id: id, done: done });
    }
</script>

<div class="todo-list-wrapper">
    <div class="todo-list" bind:this="{listDiv}">
        <div bind:offsetHeight="{listDivOffsetHeight}">
            <ul>
                {#each [...todos] as [key, todo]}
                    <li>
                        <label for="{todo.id}">
                            <input
                                on:input="{() =>
                                    toggleTodo(todo.id, !todo.done)}"
                                type="checkbox"
                                checked="{todo.done}"
                            />
                            {todo.text}
                        </label>
                        <button on:click="{() => deleteTodo(todo.id)}"
                            >Delete</button
                        >
                    </li>
                {/each}
            </ul>
        </div>
    </div>
    <form on:submit|preventDefault="{addTodo}" class="add-todo-form">
        <input bind:this="{input}" bind:value="{inputText}" />
        <Button type="submit" disabled="{!inputText}">Add</Button>
    </form>
</div>

<style>
    .todo-list {
        max-height: 150px;
        overflow: auto;
    }
</style>
