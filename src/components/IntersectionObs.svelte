<script lang="ts">
  import { onMount } from 'svelte'

  export let callback: IntersectionObserverCallback

  const options = {
    rootMargin: '0px',
    threshold: 0.5,
  }

  onMount(() => {
    const observer = new IntersectionObserver(callback, options)
    observer.observe(document.querySelector('#obs'))
  })
</script>

<span id="obs" />
