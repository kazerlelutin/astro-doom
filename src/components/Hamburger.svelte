<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<div class="hamburger" on:click={() => dispatch('open')}>
  {#each [1, 2, 3] as _bar}
    <div class="bar" />
  {/each}
</div>

<style>
  .hamburger {
    cursor: pointer;
    height: 30px;
    position: fixed;
    right: 10px;
    top: 10px;
    width: 35px;
    z-index: 30;
  }
  .bar {
    background: hsl(
      var(--color-red-hue),
      var(--color-red-sat),
      var(--color-red-light)
    );
    border-radius: 50px;
    height: 4px;
    position: absolute;
    right: 0;
  }
  .bar:nth-child(1) {
    left: 0;
    top: 0;
  }
  .bar:nth-child(2) {
    left: 25%;
    top: 10px;
  }
  .bar:nth-child(3) {
    left: 40%;
    top: 20px;
  }
</style>
