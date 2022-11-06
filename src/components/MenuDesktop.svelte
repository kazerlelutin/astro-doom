<script lang="ts">
  import MenuLinks from './MenuLinks.svelte'
  import Nswd from './Nswd.svelte'
</script>

<div class="containerDesktop">
  <Nswd />
  <MenuLinks />
</div>

<style>
  .containerDesktop {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 15px;
    padding: 10px;
    margin-top: -10px;
    background: rgb(3, 0, 0);
    border-top: 1px solid hsl(var(--color-red-hue), var(--color-red-sat), 10%);
    border-bottom: 1px solid
      hsl(var(--color-red-hue), var(--color-red-sat), 10%);
    z-index: 50;
    box-shadow: 0 5px 10px
      hsla(
        var(--color-red-hue),
        var(--color-red-sat),
        var(--color-red-light),
        0.2
      );
  }
</style>
