<script lang="ts">
    import { onMount } from "svelte";
    import Home from "./pages/Home.svelte";
    import Settings from "./pages/Settings.svelte";

    let page: string;

    function onRouteChange(): void {
        const path = window.location.hash.slice(1);

        if (path === "/") {
            page = "home";
            return;
        }

        if (path === "/settings") {
            page = "settings";
            return;
        }

        window.location.hash = "/";
    }

    onMount(onRouteChange);
</script>

<svelte:window on:hashchange="{onRouteChange}" />

<nav>
    <a href="#/home">Home</a>
    <a href="#/settings">Settings</a>
</nav>

{#if page === "home"}
    <Home />
{:else if page === "settings"}
    <Settings />
{/if}

<style>
</style>
