<svelte:options immutable={true} />

<script lang="ts">
    import type { Todo } from "src/types";
    import Button from "./Button.svelte";
    import { createEventDispatcher, onDestroy, onMount } from "svelte";

    onMount(() => {
        console.log('mounted')

        return () => console.log('destroyed 2')
    })
    onDestroy(() => console.log('destroyed'))

    export let todos: Map<string, Todo> = new Map();

    let inputText: string = '';
    let input: HTMLInputElement;

    export function clearInput() {
        inputText = '';
    }

    export function focusInput() {
        input.focus();
    }

    const dispatch = createEventDispatcher();

    function addTodo() {
        const isNotCancelled = dispatch('addTodo', { text: inputText }, { cancelable: true });

        if (isNotCancelled) {
            inputText = '';
        }
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
    <input bind:this={input} bind:value={inputText}/>
    <Button type="submit" disabled={!inputText}>Add</Button>
    </form>
</div>