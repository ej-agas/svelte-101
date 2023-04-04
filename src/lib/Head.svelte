<script>
    import settings from "../stores/Settings";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&family=Staatliches&display=swap"
        rel="stylesheet"
    />
    {#if $settings.colorScheme === "dark"}
        <style>
            :root {
                --backgroundColor: #1d1d1d;
                --textColor: #fff;
            }
        </style>
    {:else}
        <style>
            :root {
                --backgroundColor: #fff;
                --textColor: #000;
            }
        </style>
    {/if}
</svelte:head>
