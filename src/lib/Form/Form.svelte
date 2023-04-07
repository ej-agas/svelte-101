<script lang="ts">
    import { setContext, createEventDispatcher } from "svelte";
    import { writable } from "svelte/store";
    import formKey from "./form-key";
    import type { FormContext } from "src/types";

    const dispatch = createEventDispatcher();

    export let initialValues = {};
    const formStore = writable<FormContext>({
        values: initialValues,
        errors: {},
        showErrors: false,
    });

    setContext(formKey, formStore);
</script>

<pre>
{JSON.stringify($formStore, null, 2)}
</pre>
<form
    on:submit|preventDefault="{() => {
        $formStore.showErrors = true;
        if (Object.keys($formStore.errors).length !== 0) {
            console.log($formStore.errors);
            return;
        }

        dispatch('submit', $formStore.values);
    }}"
>
    <slot hasErrors="{Object.keys($formStore.errors).length !== 0}" />
</form>
