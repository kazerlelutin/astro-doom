<script lang="ts">
  import { onMount } from "svelte"
  import MenuDesktop from "./MenuDesktop.svelte"

  let isMobile: boolean
  function handleResize() {
    isMobile = window.innerWidth <= 600
  }

  onMount(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
  })
</script>

{#if isMobile}
  <p>MOBILE</p>
{:else}
  <MenuDesktop />
{/if}
