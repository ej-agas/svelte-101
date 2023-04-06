<script lang="ts">
    import { setContext, createEventDispatcher } from "svelte";
    import { writable } from "svelte/store";
    import formKey from "./form-key";
    import type { FormContext } from "src/types";

    const dispatch = createEventDispatcher();

    export let initialValues = {};
    const form = writable<FormContext>({ values: initialValues, errors: {} });

    setContext(formKey, form);
</script>

<pre>
    {JSON.stringify($form, null, 2)}
</pre>
<form
    on:submit|preventDefault="{() => {
        dispatch('submit', $form.values);
    }}"
>
    <slot />
</form>
