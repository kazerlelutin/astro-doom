<script lang="ts">
  import Hamburger from './Hamburger.svelte'
  import MenuLinks from './MenuLinks.svelte'
  import Nswd from './Nswd.svelte'

  let isOpen = false

  const setIsOpen = () => (isOpen = !isOpen)
</script>

<Hamburger on:open={setIsOpen} />

<div class="menu" data-isopen={isOpen}>
  <Nswd />

  <div class="links" on:click={() => (isOpen = false)}>
    <MenuLinks direction="vertical" />
  </div>
</div>

<style>
  .menu {
    background: rgba(0, 0, 0, 0.95);
    bottom: 0;
    box-shadow: -10px 0 10px
      hsla(
        var(--color-red-hue),
        var(--color-red-sat),
        var(--color-red-light),
        0.3
      );
    display: grid;
    gap: 15px;
    grid-template-rows: 1fr auto;
    justify-items: end;
    padding: 60px 20px 20px;
    position: fixed;
    right: 0;
    top: 0;
    transition: 0.3s ease-in-out;
    width: 90%;
    z-index: 20;
  }

  .menu[data-isopen='false'] {
    right: -100%;
    z-index: 50;
  }

  .links {
    align-items: flex-end;
    align-content: flex-end;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
</style>
