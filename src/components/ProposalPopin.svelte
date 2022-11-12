<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import SubmitButton from './SubmitButton.svelte'

  const dispatch = createEventDispatcher()
  const closeModale = () => dispatch('open')
  const url = import.meta.env.PUBLIC_URL_BRUCELEEKOS + '/article/proposal'

  let loading = false
  let value = ''
  let error: string | null = null
  let success: string | null = null

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    if (!value) return
    loading = true
    const headers = { 'Content-Type': 'application/json' }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ url: value }),
    })

    if (response.status !== 200) {
      error = await response.text()
    } else {
      const json = await response.json()
      success = `Thank you for this article: ${json.title}`
    }
    value = ''
    loading = false
  }
</script>

<div class="container">
  <div class="popin">
    <div class="containerClose">
      <div class="close" on:click={closeModale}>close</div>
    </div>

    <form on:submit={handleSubmit} class="form">
      <input
        type="text"
        bind:value
        on:click={() => (error = null)}
        required
        placeholder="Submit an article"
      />
      <div class="buttons">
        <button type="reset">cancel</button>
        <SubmitButton bind:loading text="Submit" />
      </div>
    </form>
    {#if error}
      <div class="error">{error}</div>
    {/if}

    {#if success}
      <div class="success">{success}</div>
    {/if}
  </div>
</div>

<style>
  .container {
    display: flex;
    gap: 10px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 10px;
    z-index: 200;
    background: rgba(0, 0, 0, 0.5);
  }

  .containerClose {
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
  }

  .close {
    cursor: pointer;
    transition: 200ms ease-in-out;
    color: white;
    text-transform: uppercase;
    background: hsl(
      var(--color-red-hue),
      var(--color-red-sat),
      var(--color-red-light)
    );
    padding: 5px;
    border-radius: 5px;
  }

  .popin {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: auto;
    border: 1px solid
      hsl(var(--color-blue-hue), var(--color-blue-sat), var(--color-blue-light));
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.9);
    padding: 15px;
  }

  .error {
    text-align: center;
    color: hsl(var(--color-red-hue), var(--color-red-sat), 50%);
  }

  .success {
    text-align: center;
    color: hsl(
      var(--color-yellow-hue),
      var(--color-yellow-sat),
      var(--color-yellow-light)
    );
    padding: 10px;
    font-size: 1.2em;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .buttons {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }

  @media screen and (max-width: 450px) {
    .popin {
      width: 100%;
    }
  }
</style>
