<script lang="ts">
  import SearchButton from './SearchButton.svelte'
  import { links } from '../lib/links'

  export let direction: 'vertical' | 'horizontal' = 'horizontal'
</script>

<div class="menu" data-direction={direction}>
  <a class="link" href="/about">About</a>
  <SearchButton />
</div>

<div class="extLink" data-direction={direction}>
  <a class="kofiLink" href={links.discord} target="_blank" rel="noreferrer">
    <img
      class="kofiLink"
      src="/discord.webp"
      alt="kofi"
      height="41"
      width="29"
    />
  </a>
  <a class="kofiLink" href={links.kofi} target="_blank" rel="noreferrer">
    <img class="kofiLink" src="/kofi.png" alt="kofi" height="35" width="182" />
  </a>
</div>

<style>
  .menu {
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;
    align-items: center;
    justify-items: center;
  }

  .menu[data-direction='vertical'] {
    flex-direction: column-reverse;
    align-items: flex-end;
  }

  .extLink {
    height: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .extLink[data-direction='vertical'] {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .kofiLink {
    display: flex;
    align-items: center;
  }

  .link::first-letter {
    text-transform: uppercase;
  }

  .link {
    color: hsla(
      var(--color-yellow-hue),
      var(--color-yellow-sat),
      var(--color-yellow-light),
      1
    );
    transition: 200ms ease-in-out;
    padding: 5px;
  }

  .link:hover {
    background: hsla(
      var(--color-red-hue),
      var(--color-red-sat),
      var(--color-red-light),
      0.8
    );
    color: white;
    transform: translateY(1px);
    border-radius: 5px 2px 5px 2px;
  }
</style>
