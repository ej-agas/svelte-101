<script lang="ts">
    import { v4 as uuidv4 } from "uuid";
    import { getContext } from "svelte";

    export let name: string;
    export let type: string = "text";
    export let label: string = undefined;
    export let validate = undefined;

    const { values } = getContext("form");

    const id = uuidv4();
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
        value="{values[name] || ''}"
    />
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
</style>
