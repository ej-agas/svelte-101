<script lang="ts">
    import Button from "../lib/Button.svelte";
    import { Field, Form } from "../lib/Form";
    import { Required, Email } from "../validation/validation";

    function handleSubmit(e: CustomEvent) {
        console.log(e.detail);
    }
</script>

<Form
    on:submit="{handleSubmit}"
    initialValues="{{ username: 'test-user', email: 'user@company.com' }}"
    let:hasErrors
>
    <Field name="username" label="Username" validate="{Required}" />
    <Field
        name="email"
        label="Email"
        type="text"
        validate="{(value, label) => {
            return Email(value, label) || Required(value, label);
        }}"
    />
    <Field
        name="password"
        label="Password"
        type="password"
        validate="{Required}"
    />
    <Button type="submit" disabled="{hasErrors}">Submit</Button>
</Form>
