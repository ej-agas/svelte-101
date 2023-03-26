<svelte:options immutable={true} />

<script lang="ts">
    import type { Todo } from "src/types";
    import Button from "./Button.svelte";
    import { createEventDispatcher } from "svelte";

    export let todos: Map<string, Todo> = new Map();
    let inputText: string = '';

    const dispatch = createEventDispatcher();

    function addTodo() {
        dispatch('addTodo', { text: inputText });
        inputText = '';
    }

    function deleteTodo(id: string) {
        dispatch('deleteTodo', { id: id });
    }

    function toggleTodo(id: string, done: boolean) {
        dispatch('toggleTodo', { id: id, done: done });
    }

</script>

<div class="todo-list-wrapper">
    <ul>
        {#each [...todos] as [key, todo]}
            <li>
                <label for="">
                    <input
                        on:input={() => toggleTodo(todo.id, !todo.done)}
                        type="checkbox"
                        checked={todo.done}
                    >
                    {todo.text}
                </label>
                <button on:click={() => deleteTodo(todo.id)}>Delete</button>
            </li>
        {/each}
    </ul>
    <form
        on:submit|preventDefault={addTodo}
        class="add-todo-form"
    >
    <input bind:value={inputText}/>
    <Button type="submit" disabled={!inputText}>Add</Button>
    </form>
</div>