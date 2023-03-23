<script lang="ts">
  let count1 = 0;
  let count2 = 0;
  $: setCount2(count1);
  $: string = `Count 2 is ${count2}`;

  function setCount2(value: number): void {
    count2 = value;
  }

  function increment1(): void {
    count1 += 1;
  }
  function increment2(): void {
    count2 += 1;
  }
</script>

<button on:click={increment1}>Clicks {count1}</button>
<button on:click={increment2}>Clicks {count2}</button>
<h3>{string}</h3>

<style>
  button {
    padding: 15px 20px;
  }
</style>
