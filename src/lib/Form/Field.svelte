<script lang="ts">
    import { v4 as uuidv4 } from "uuid";
    import { getContext, onMount } from "svelte";
    import formKey from "./form-key";
    import type { FormContext } from "src/types";
    import type { Writable } from "svelte/store";

    export let name: string;
    export let type: string = "text";
    export let label: string = undefined;
    export let validate = undefined;

    let isDirty: boolean = false;

    const id = uuidv4();
    const formStore: Writable<FormContext> = getContext(formKey);

    function handleInput(e: Event) {
        $formStore.values[name] = (e.currentTarget as HTMLInputElement).value;
    }

    onMount(() => {
        if (!validate) {
            return;
        }

        const error = validate($formStore.values[name], label);

        if (!error) {
            return;
        }

        $formStore.errors[name] = error;
    });
</script>

<div class="field">
    {#if label}
        <label for="{id}">{label}</label>
    {/if}
    <input
        id="{id}"
        name="{name}"
        type="{type}"
        placeholder="{label}"
        value="{$formStore.values[name] || ''}"
        on:input="{(e) => {
            isDirty = true;
            const value = e.currentTarget.value;

            if (!validate) {
                handleInput(e);
                return;
            }

            const error = validate(value.trim(), label);

            if (!error) {
                delete $formStore.errors[name];
                handleInput(e);
                return;
            }

            $formStore.errors[name] = error;
            handleInput(e);
        }}"
        on:focus="{() => {
            isDirty = true;
        }}"
    />
    {#if $formStore.errors[name] && ($formStore.showErrors || isDirty)}
        <p class="error">{$formStore.errors[name]}</p>
    {/if}
</div>

<style>
    div.field {
        margin-bottom: 10px;
    }
    label {
        display: block;
        margin-bottom: 5px;
        font-size: 14px;
    }
    input {
        height: 30px;
        width: 250px;
        max-width: 100%;
    }
    p.error {
        color: red;
        font-size: 14px;
        margin: 5px 0 0;
    }
</style>
