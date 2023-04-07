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
    <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
        integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
        crossorigin=""
    />
    <script
        src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
        integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
        crossorigin=""
    ></script>
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
