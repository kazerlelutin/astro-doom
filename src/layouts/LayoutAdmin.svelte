<script lang="ts">
  import { onMount } from 'svelte'
  import Nswd from '../components/Nswd.svelte'
  import { getToken } from '../lib/token-utils'
  const url = import.meta.env.PUBLIC_URL_BRUCELEEKOS + '/login/validate'

  let loading = true,
    connected = false

  onMount(() => {
    validateToken()
  })

  const validateToken = async () => {
    loading = true
    const headers = { 'Content-Type': 'application/json' }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ token: getToken() }),
    })

    if (response.status !== 200) {
      document.location.href = '/login'
    } else {
      const json = await response.json()
      console.log(json)
      connected = true
    }
    loading = false
  }
</script>

<div class="container">
  <header>
    <Nswd />
    <div class="dash">Dashboard</div>
  </header>
  {#if loading}
    <div class="loading">loading...</div>
  {/if}
  {#if connected}
    <slot />
  {/if}
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
    box-sizing: border-box;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .loading {
    text-align: center;
    padding: 20px;
  }
</style>
