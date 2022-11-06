<script lang="ts">
  import SearchPopin from './SearchPopin.svelte'

  let isOpen = false

  const setIsOpen = () => (isOpen = !isOpen)
</script>

<div class="container" title="search" on:click={setIsOpen}>
  <div class="round" />
  <div class="line" />
</div>

{#if isOpen}
  <SearchPopin on:open={setIsOpen} />
{/if}

<style>
  .container {
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
  }

  .round {
    height: 100%;
    width: 100%;
    border: 4px solid
      hsl(
        var(--color-yellow-hue),
        var(--color-yellow-sat),
        var(--color-yellow-light)
      );
    border-radius: 50%;
    transition: 200ms ease-in-out;
  }

  .line {
    position: absolute;
    width: 10px;
    height: 4px;
    background: hsl(
      var(--color-yellow-hue),
      var(--color-yellow-sat),
      var(--color-yellow-light)
    );
    transition: 200ms ease-in-out;
    transform-origin: center center;
    transform: rotate(-30deg) translate(-2px, -6px);
  }

  .container:hover .round {
    border-radius: 0;
  }

  .container:hover .line {
    transform: rotate(-90deg) translate(12px, 5px);
  }
</style>
