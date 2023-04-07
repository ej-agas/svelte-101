<script lang="ts">
    import { location } from "../stores/Location";
    import Map from "../lib/Map/Map.svelte";
    import Marker from "../lib/Map/Marker.svelte";
    import type { Coordinates } from "src/types";
    import Form from "../lib/Form/Form.svelte";
    import Field from "../lib/Form/Field.svelte";
    import Button from "../lib/Button.svelte";

    let initialCoordinates: Coordinates = {
        latitude: 14.5995,
        longitude: 120.9842,
    };
</script>

{#if $location}
    <Map center="{$location}">
        <Marker coordinates="{{ latitude: 14.5995, longitude: 120.9842 }}" />
    </Map>
    <h1>Latitude: {$location.latitude}</h1>
    <h1>Longitude: {$location.longitude}</h1>
{:else}
    <Map center="{initialCoordinates}">
        <Marker coordinates="{{ latitude: 14.5995, longitude: 120.9842 }}" />
    </Map>
    <h1>Latitude: {initialCoordinates.latitude}</h1>
    <h1>Longitude: {initialCoordinates.longitude}</h1>
{/if}
