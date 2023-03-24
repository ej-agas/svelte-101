<script lang="ts">
</script>

<button><slot>FALLBACK</slot></button>

<style lang="scss">
    button {
        border: none;
        background-color: variables.$buttonColor;
        color: variables.$buttonTextColor;
        padding: 15px 20px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: variables.$buttonColorHover;
        }
    }
</style>