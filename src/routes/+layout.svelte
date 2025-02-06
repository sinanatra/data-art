<script>
  import Header from "$lib/components/Header.svelte";
</script>

<main>
  <Header />
  <slot />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  :global(html, body) {
    height: 100%;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    --light: #f5f5f5;
    --dark: rgb(20, 20, 20);
    --highlite: rgba(0, 0, 0, 0.056);
    --highlite-1: blue;
    font-family: space, sans-serif;
    font-feature-settings: "liga", "ss03", "ss02";
    text-rendering: geometricPrecision;
    font-size: 16px;
    background-color: var(--light);
    hyphens: auto;
  }

  :global(a) {
    color: var(--dark);
    text-decoration: underline;
  }

  :global(::selection) {
    color: var(--light);
    background-color: var(--dark);
  }

  article {
    color: var(--dark);
  }

  @font-face {
    font-family: space;
    src: url("/SpaceGrotesk-Regular.woff2");
    font-weight: normal;
  }

  @font-face {
    font-family: space;
    src: url("/SpaceGrotesk-Medium.woff2");
    font-weight: bold;
  }

  @font-face {
    font-family: "Space Mono";
    src: url("/SpaceMono-Regular.ttf");
    font-style: regular;
  }

  @font-face {
    font-family: "Space Mono";
    src: url("/SpaceMono-Italic.ttf");
    font-style: italic;
  }
</style>
