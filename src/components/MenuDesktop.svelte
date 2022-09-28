<script>
  import links from "../lib/links"
</script>

<div class="containerDesktop">
  <div class="logo">
    <a class="initial" href="/">
      NSW<span class="doom">D</span>
    </a>
  </div>
  <div class="menu">
    fd
  </div>

  <div class="extLink">
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
      <img
        class="kofiLink"
        src="/kofi.png"
        alt="kofi"
        height="35"
        width="182"
      />
    </a>
  </div>
</div>

<style>
  .containerDesktop {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 15px;
    padding: 10px;
    margin-top: -10px;
    background: rgb(3, 0, 0);
    border-top: 1px solid hsl(var(--color-red-hue), var(--color-red-sat), 10%);
    border-bottom: 1px solid
      hsl(var(--color-red-hue), var(--color-red-sat), 10%);
    z-index: 50;
    box-shadow: 0 5px 10px
      hsla(
        var(--color-red-hue),
        var(--color-red-sat),
        var(--color-red-light),
        0.2
      );
  }

  .initial {
    font-family: "Karantina", cursive;
    text-transform: uppercase;
    font-size: 2em;
  }

  .doom {
    color: hsla(
      var(--color-red-hue),
      var(--color-red-sat),
      var(--color-red-light)
    );
  }

  .menu {
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;
    align-items: center;
    justify-items: center;
  }

  .extLink {
    height: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .kofiLink {
    display: flex;
    align-items: center;
  }

  .imgLink {
    max-width: 120px;
    height: auto;
  }

  .imgLink img {
    width: 100%;
    height: auto;
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
