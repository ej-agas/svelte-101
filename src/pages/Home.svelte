<script lang="ts">
    import { loggedInUser } from "../stores/User";
    import { location } from "../stores/Location";
</script>

<h1>Home</h1>

<h3>
    Name: {$loggedInUser.firstName}
    {$loggedInUser.middleName}
    {$loggedInUser.lastName}
</h3>

<h3>Email: {$loggedInUser.email}</h3>

<h3>Token: {$loggedInUser.token}</h3>

{#if $location && !$location.error}
    {$location.latitude}, {$location.longitude}
{/if}

{#if $location && $location.error}
    {$location.error.message}
{/if}
