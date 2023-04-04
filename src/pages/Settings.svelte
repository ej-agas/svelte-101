<script lang="ts">
    import settings from "../stores/Settings";
</script>

<button
    on:click="{() => {
        settings.toggleColorScheme();
    }}">Toggle Color Scheme</button
>

<button
    on:click="{() => {
        settings.updateSetting('language', Math.random());
    }}">Update Language</button
>

<button on:click="{() => settings.reset()}">Reset</button>
<br />
{$settings.colorScheme}
<br />
{$settings.language}
<br />
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
