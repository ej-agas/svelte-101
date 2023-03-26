<script lang="ts">
    import Button from './lib/Button.svelte';
    import DiGnu from 'svelte-icons/di/DiGnu.svelte'
    import DiLinux from 'svelte-icons/di/DiLinux.svelte'
</script>

<Button
    let:isHovered
    size={"large"}
    shadow
>
    <div
        style:width="20px"
        slot="leftContent"
    >
    {#if isHovered}
        <DiLinux />
    {:else}
        <DiGnu />
    {/if}
    </div>
    Svelte is Awesome
</Button>

<style>
</style>