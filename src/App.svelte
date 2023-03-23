<script lang="ts">
  let name = "world";
  let src = "http://picsum.com/200/200";
  let htmlString = "Some <strong>string</strong> with HTML";
</script>

<img {src} alt="Some text {name}" />
<h1>Hello {name.toUpperCase()}!</h1>
<p>{@html htmlString}</p>

<style>
  h1 {
    color: magenta;
  }
</style>
