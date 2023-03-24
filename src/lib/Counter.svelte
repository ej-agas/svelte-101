<script lang="ts">
  export let initialCount: number;
  export let maxCount: number = undefined

  let count: number = initialCount;

  function increment() {
    if (count < maxCount) {
      count += 1;
    }
  }
</script>

<button on:click={increment}>Clicks {count}</button>

<style>
  button {
    padding: 15px 20px;
  }
</style>
