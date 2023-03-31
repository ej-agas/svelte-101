<script lang="ts">
    import { loggedInUser } from "../stores/Settings";

    let input = {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
    };

    function handleSubmit(event: Event): void {
        if (input.firstName !== "") {
            $loggedInUser.firstName = input.firstName;
        }

        if (input.middleName !== "") {
            $loggedInUser.middleName = input.middleName;
        }

        if (input.lastName !== "") {
            $loggedInUser.lastName = input.lastName;
        }

        if (input.email !== "") {
            $loggedInUser.email = input.email;
        }
    }
</script>

<h1>Settings</h1>

<form on:submit|preventDefault="{handleSubmit}">
    <label for="firstName" class="for">First Name</label>
    <input
        name="firstName"
        type="text"
        placeholder="First Name"
        bind:value="{input.firstName}"
    />
    <br />
    <label for="middleName" class="for">Middle Name</label>
    <input
        name="middleName"
        type="text"
        placeholder="Middle Name"
        bind:value="{input.middleName}"
    /> <br />
    <label for="lastName" class="for">Last Name</label>
    <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        bind:value="{input.lastName}"
    /> <br />
    <label for="email" class="for">Email</label>
    <input
        name="email"
        type="email"
        placeholder="foobar@email.com"
        bind:value="{input.email}"
    />

    <button type="submit">Update</button>
</form>
