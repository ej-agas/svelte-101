<script lang="ts">
    import Button from "../lib/Button.svelte";
    import { Field, Form } from "../lib/Form";

    function handleSubmit(e: CustomEvent) {
        console.log(e.detail);
    }
</script>

<Form
    on:submit="{handleSubmit}"
    initialValues="{{ username: 'Test', email: 'test@test.com' }}"
>
    <Field name="username" label="Username" />
    <Field name="email" label="Email" type="email" />
    <Field name="password" label="Password" type="password" />
    <Button type="submit">Submit</Button>
</Form>
