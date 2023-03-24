<script lang="ts">
  import Counter from "./lib/Counter.svelte";

  const props = {
    initialCount: 5,
    maxCount: 10,
  }

</script>

<Counter {...props} />
