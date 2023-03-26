<script lang="ts">
    import Button from './lib/Button.svelte';
    import DiLinux from 'svelte-icons/di/DiLinux.svelte'
</script>

<Button
    size={"large"}
    shadow
    >
    <div
        style:width="30px"
        slot="leftContent"
    >
        <DiLinux/>
    </div>
    Svelte is Awesome
</Button>

<style>
</style>