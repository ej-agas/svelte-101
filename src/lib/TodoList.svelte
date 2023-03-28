<svelte:options immutable="{true}" />

<script lang="ts">
    import type { Todo } from "src/types";
    import Button from "./Button.svelte";
    import { createEventDispatcher, afterUpdate } from "svelte";
    import FaRegTrashAlt from "svelte-icons/fa/FaRegTrashAlt.svelte";

    export let todos: Map<string, Todo> = new Map();
    let previousTodos: Map<string, Todo> = todos;
    let autoScroll: boolean = false;

    let inputText: string = "";
    let input: HTMLInputElement;
    let listDiv: HTMLDivElement;
    let listDivOffsetHeight: number;

    const dispatch = createEventDispatcher();

    afterUpdate(() => {
        if (autoScroll) {
            listDiv.scrollTo(0, listDivOffsetHeight);
        }
        autoScroll = false;
    });

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
            {#if todos.size === 0}
                <p>No todos</p>
            {:else}
                <ul>
                    {#each [...todos] as [key, todo]}
                        <li class="{todo.done ? 'completed' : ''}">
                            <label for="{todo.id}">
                                <input
                                    on:input="{() =>
                                        toggleTodo(todo.id, !todo.done)}"
                                    type="checkbox"
                                    checked="{todo.done}"
                                />
                                {todo.text}
                            </label>
                            <button
                                class="remove-todo-button"
                                aria-label="Remove Todo: {todo.text}"
                                on:click="{() => deleteTodo(todo.id)}"
                                ><span
                                    style:width="10px"
                                    style:display="inline-block"
                                    ><FaRegTrashAlt />
                                </span>
                            </button>
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>
    </div>
    <form on:submit|preventDefault="{addTodo}" class="add-todo-form">
        <input
            bind:this="{input}"
            bind:value="{inputText}"
            placeholder="New Todo"
        />
        <Button type="submit" disabled="{!inputText}">Add</Button>
    </form>
</div>

<style lang="scss">
    .todo-list-wrapper {
        background-color: #424242;
        border: 1px solid #4b4b4b;
        .no-items-text {
            margin: 0;
            padding: 15px;
            text-align: center;
        }
        .todo-list {
            max-height: 200px;
            overflow: auto;
            ul {
                margin: 0;
                padding: 10px;
                list-style: none;
                li {
                    margin-bottom: 5px;
                    display: flex;
                    align-items: center;
                    background-color: #303030;
                    border-radius: 5px;
                    padding: 10px;
                    position: relative;
                    label {
                        cursor: pointer;
                        font-size: 18px;
                        display: flex;
                        align-items: baseline;
                        padding-right: 20px;
                        input[type="checkbox"] {
                            margin: 0 10px 0 0;
                            cursor: pointer;
                        }
                    }
                    &.completed > label {
                        opacity: 0.5;
                        text-decoration: line-through;
                    }
                    .remove-todo-button {
                        border: none;
                        background: none;
                        padding: 5px;
                        position: absolute;
                        right: 10px;
                        cursor: pointer;
                        display: none;
                        :global(svg) {
                            fill: #bd1414;
                        }
                    }
                    &:hover {
                        .remove-todo-button {
                            display: block;
                        }
                    }
                }
            }
        }
        .add-todo-form {
            padding: 15px;
            background-color: #303030;
            display: flex;
            flex-wrap: wrap;
            border-top: 1px solid #4b4b4b;
            input {
                flex: 1;
                background-color: #424242;
                border: 1px solid #4b4b4b;
                padding: 10px;
                color: #fff;
                border-radius: 5px;
                margin-right: 10px;
            }
        }
    }
</style>
