<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { WP_post } from '../types/post.type'
  import DebounceInput from './DebounceInput.svelte'
  import SearchPost from './SearchPost.svelte'
  const dispatch = createEventDispatcher()
  const closeModale = () => dispatch('open')
  const url = import.meta.env.PUBLIC_WP

  let loading = false
  let init = false
  let posts: WP_post[] = []

  async function handleFetch(search: string) {
    init = true
    loading = true
    const headers = { 'Content-Type': 'application/json' }
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: `query Search($search: String) {
          posts(where: {search: $search}) {
            edges {
              node {
                featuredImage {
                  node {
                    mediaDetails {
                        height
                        width
                        file
                    }
                    mediaItemUrl
                  }
                }
                slug
                title
                excerpt
                categories {
                  nodes {
                    name
                  }
                }
              }
            }
          }      
      }`,
        variables: { search },
      }),
    })
    const json = await response.json()
    posts = json?.data?.posts?.edges
    loading = false
  }
</script>

<div class="container">
  <div class="containerClose">
    <div class="close" on:click={closeModale}>close</div>
  </div>
  <div class="page">
    <DebounceInput
      on:search={({ detail }) => handleFetch(detail)}
      placeholder="search"
    />
    <div class="containerPage">
      {#if loading}
        <div class="loading">loading...</div>
      {/if}
      {#if init && !loading && posts.length === 0}
        <div class="noResult">no result.</div>
      {/if}
      <div class="results">
        <div class="resultsContainer" data-result={posts.length}>
          {#each posts as post}
            <SearchPost {post} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 10px;
    position: fixed;
    top: 15px;
    right: 15px;
    left: 15px;
    bottom: 15px;
    border: 1px solid
      hsl(var(--color-blue-hue), var(--color-blue-sat), var(--color-blue-light));
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.8);
    padding: 10px;
    align-items: flex-start;
    z-index: 200;
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

  .page {
    width: 500px;
    display: grid;
    height: 100%;
    grid-template-rows: auto 1fr;
    gap: 10px;
    margin: auto;
    justify-self: baseline;
    overflow-y: hidden;
  }

  .containerPage {
    position: relative;
    overflow-y: hidden;
  }

  .results {
    overflow-x: auto;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 5px;
  }

  .resultsContainer {
    display: flex;
    flex-direction: column;
    padding: 3px;
    gap: 3px;
    background: linear-gradient(
      349deg,
      rgba(187, 5, 5, 1) 0,
      rgba(206, 110, 2, 1) 31%,
      rgba(217, 167, 0, 1) 54%,
      rgba(189, 120, 0, 1) 72%,
      rgba(117, 1, 1, 1) 100%
    );
    margin-bottom: 50px;
    margin-right: 5px;
  }

  .resultsContainer[data-result='0'] {
    background: none;
  }

  .noResult {
    font-size: 1.5em;
    text-align: center;
  }

  .loading {
    font-size: 1.2em;
    text-align: center;
  }

  .post {
    position: relative;
    background: #000;
    cursor: pointer;
    display: grid;
    transition: 200ms ease-in-out;
  }

  .post img {
    width: 100%;
  }

  .excerpt {
    font-style: italic;
    word-break: break-all;
  }

  .postCategorie:after {
    content: ',';
  }

  .postCategorie:last-child:after {
    content: '';
  }

  .post:hover {
    transform: scale(1.01);
    box-shadow: 0 0 20px
      hsl(var(--color-red-hue), var(--color-red-sat), var(--color-red-light));
    z-index: 10;
  }

  .postDesc {
    padding: 10px;
  }

  .postCategories {
    font-size: 0.8em;
    color: hsl(
      var(--color-yellow-hue),
      var(--color-yellow-sat),
      var(--color-yellow-light)
    );
    text-transform: uppercase;
  }

  @media screen and (max-width: 500px) {
    .page {
      width: 100%;
    }
  }
</style>
