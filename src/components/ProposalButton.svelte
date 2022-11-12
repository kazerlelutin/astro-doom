<script lang="ts">
  import ProposalPopin from './ProposalPopin.svelte'

  let isOpen = false

  const setIsOpen = () => (isOpen = !isOpen)
</script>

<div class="container" title="submit an article" on:click={setIsOpen}>
  Submit a article
</div>

{#if isOpen}
  <ProposalPopin on:open={setIsOpen} />
{/if}

<style>
  .container {
    color: hsla(
      var(--color-yellow-hue),
      var(--color-yellow-sat),
      var(--color-yellow-light),
      1
    );
    transition: 200ms ease-in-out;
    cursor: pointer;
  }

  .container:hover {
    color: hsla(var(--color-yellow-hue), var(--color-yellow-sat), 70%, 1);
  }
</style>
