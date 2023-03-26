<script lang="ts">
    export let size: "small" | "medium" | "large" = "small";

    export let shadow: boolean = false

    export let bgColor: string = '';

    export let textColor: string = '';


    function setButtonSize(): string {
        switch (size) {
            case "small":
                return "size-sm";
            case "medium":
                return "size-md";
            case "large":
                return "size-lg";
            default:
                return "size-sm";
        }
    }

</script>

<button
    class={setButtonSize()}
    class:shadow
    style:--buttonBackgroundColor={bgColor}
    style:--buttonTextColor={textColor}
    >
    <slot>FALLBACK</slot>
</button>

<style lang="scss">
    button {
        border: none;
        background-color: var(--buttonBackgroundColor);
        color: var(--buttonTextColor);
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: variables.$buttonColorHover;
        }
        &:active {
            background-color: variables.$buttonColorActive;
        }
        &.size-sm {
            padding: 15px 20px;
        }
        &.size-lg {
            padding: 20px 25px;
            font-size: 20px;
        }
        &.shadow {
            box-shadow: 0 0 10px rgba(1, 1, 1, 0.3);
        }
    }
</style>