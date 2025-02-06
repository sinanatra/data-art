<script>
  import Header from "$lib/components/Header.svelte";
  import Email from "$lib/components/Email.svelte";
</script>

<main>
  <Header />
  <slot />
</main>
<Email />

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
    --highlite: blue;
    --highlite-1: rgba(0, 0, 0, 0.056);
    font-family: space, geologica, sans-serif;
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
    color: var(--dark);
    background-color: var(--highlite);
  }

  article {
    color: var(--dark);
  }

  @font-face {
    font-family: geologica;
    src: url("/Geologica-Light.ttf");
    font-weight: normal;
  }

  @font-face {
    font-family: geologica;
    src: url("/Geologica-SemiBold.ttf");
    font-weight: bold;
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
</style>
