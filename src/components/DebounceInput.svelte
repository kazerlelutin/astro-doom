<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let delay = 500,
    placeholder: string = ''

  let value = '',
    timer: any

  function handleChange(event: any) {
    value = event.target.value
    if (timer) clearInterval(timer)
    timer = setTimeout(() => dispatch('search', value), delay)
  }

  function resetValue() {
    value = ''
    dispatch('search', value)
  }
</script>

<div class="container">
  <input type="text" class="input" {placeholder} on:input={handleChange} />
  <div class="cross" data-disabled={!value} on:click={resetValue} />
</div>

<style>
  .container {
    position: relative;
    font-size: 1.1em;
    outline: 0;
    width: 100%;
    border: 1px solid
      hsl(var(--color-red-hue), var(--color-red-sat), var(--color-red-light));
    border-radius: 3px;
    transition: 0.2s ease-in-out;
    background: black;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }
  .container:hover {
    border-radius: 15px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3),
      inset 2px 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: var(--color-txt-light);
    border: 1px solid var(--color-link);
  }
  .cross {
    position: relative;
    height: 20px;
    width: 20px;
    margin-right: 5px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
  .cross[data-disabled='true'] {
    opacity: 0.3;
  }
  .cross:after,
  .cross:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
    background: hsl(
      var(--color-red-hue),
      var(--color-red-sat),
      var(--color-red-light)
    );
    top: calc(50% - 2px);
    border-radius: 5px;
  }
  .cross:before {
    transform: rotate(45deg);
  }
  .cross:after {
    transform: rotate(135deg);
  }
  .cross:hover {
    transform: rotate(90deg);
  }
  .input {
    outline: 0;
    border: none;
    padding: 11px;
    font-size: 1.05em;
    background: 0 0;
  }
  @media screen and (max-width: 500px) {
    .input {
      padding: 11px 5px;
      width: 100%;
    }
  }
</style>
