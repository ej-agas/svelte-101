<script lang="ts">
    import type { Coordinates } from "src/types";
    import L from "leaflet";
    import { onMount } from "svelte";

    export let center: Coordinates;
    export let zoom: number = 13;

    onMount(() => {
        let map = L.map("map", {
            center: [center.latitude, center.longitude],
            zoom: zoom,
        }).setView([center.latitude, center.longitude], zoom);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
    });
</script>

<div id="map"></div>

<style>
    #map {
        height: 500px;
        width: 500;
    }
</style>
