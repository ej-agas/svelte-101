<script lang="ts">
    import { loggedInUser } from "../stores/Settings";
</script>

<h1>Home</h1>

<h3>
    Name: {$loggedInUser.firstName}
    {$loggedInUser.middleName}
    {$loggedInUser.lastName}
</h3>

<h3>Email: {$loggedInUser.email}</h3>

<h3>Token: {$loggedInUser.token}</h3>
