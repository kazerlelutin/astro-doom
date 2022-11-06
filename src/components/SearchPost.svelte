<script lang="ts">
  import { WP_post } from '../types/post.type'
  export let post: WP_post
</script>

<a href={`/article/${post.node.slug}`} class="post">
  <div class="img">
    <img
      src={post.node.featuredImage.node.mediaItemUrl}
      alt={post.node.title}
    />
  </div>
  <div class="postDesc">
    <div class="postCategories">
      {#each post.node.categories.nodes as categorie}
        <div class="postCategorie">
          {categorie.name}
        </div>
      {/each}
    </div>
    <h2 class="postTitle">
      {post.node.title}
    </h2>
  </div>
</a>

<style>
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
</style>
