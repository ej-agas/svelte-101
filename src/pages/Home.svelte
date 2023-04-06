<script lang="ts">
    import Button from "../lib/Button.svelte";
    import { Field, Form } from "../lib/Form";
</script>

<Form on:submit="{() => {}}">
    <Field name="username" label="Username" />
    <Field name="email" label="Email" type="email" />
    <Field name="password" label="Password" type="password" />
    <Button type="submit">Submit</Button>
</Form>
