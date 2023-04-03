<script lang="ts">
    import { settings } from "../stores/Settings";
</script>

<button
    on:click="{() => {
        $settings.colorScheme =
            $settings.colorScheme === 'dark' ? 'light' : 'dark';
    }}">Toggle Color Scheme</button
>

<label for="colorScheme">
    <input
        type="radio"
        name="colorScheme"
        id="colorScheme"
        value="dark"
        bind:group="{$settings.colorScheme}"
    /> Dark
</label>

<label for="colorScheme">
    <input
        type="radio"
        name="colorScheme"
        id="colorScheme"
        value="light"
        bind:group="{$settings.colorScheme}"
    /> Light
</label>
