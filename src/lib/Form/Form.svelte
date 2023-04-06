<script lang="ts">
    import { setContext } from "svelte";

    export let initialValues = {};

    setContext("form", { values: initialValues, errors: {} });
</script>

<form>
    <slot />
</form>
