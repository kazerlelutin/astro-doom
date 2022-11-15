<script lang="ts">
  import { setToken } from '../lib/token-utils'
  import SubmitButton from './SubmitButton.svelte'

  let loading = false,
    username = '',
    password = '',
    error: string | null = null

  const url = import.meta.env.PUBLIC_URL_BRUCELEEKOS + '/login/me'

  const handleLogin = async (e: SubmitEvent) => {
    e.preventDefault()
    if (!username || !password) return
    loading = true
    const headers = { 'Content-Type': 'application/json' }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ username, password }),
    })

    if (response.status !== 200) {
      error = await response.text()
    } else {
      const json = await response.json()
      setToken(json?.token)
      return (document.location.href = '/dashboard')
    }
    loading = false
  }
</script>

<div class="container">
  <h2>Login</h2>
  <form on:submit={handleLogin}>
    <input
      type="text"
      autocomplete="username"
      placeholder="username/email"
      bind:value={username}
    />
    <input
      type="password"
      autocomplete="password"
      placeholder="password"
      bind:value={password}
    />
    <div class="buttons">
      <button type="reset">Cancel</button>
      <SubmitButton bind:loading text="login" />
    </div>

    {#if error}
      <div class="error">{error}</div>
    {/if}
  </form>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px;
    gap: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }

  .error {
    text-align: center;
    color: hsl(var(--color-red-hue), var(--color-red-sat), 50%);
  }
</style>
