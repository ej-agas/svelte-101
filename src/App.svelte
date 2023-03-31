<script lang="ts">
    import "@picocss/pico/css/pico.css";
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

<div class="container">
    <nav class="center">
        <ul>
            <li><a href="#/home" role="button">Home</a></li>
            <li><a href="#/settings" role="button">Settings</a></li>
        </ul>
    </nav>

    {#if page === "home"}
        <Home />
    {:else if page === "settings"}
        <Settings />
    {/if}
</div>

<style>
</style>
