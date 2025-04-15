<script>
  import Header from "$lib/components/Header.svelte";
  import Email from "$lib/components/Email.svelte";
  import Footer from "$lib/components/Footer.svelte";

</script>

<main>
  <Header />
  <slot />
</main>
<Email />
<Footer />

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .media {
    display: grid;
    font-size: 1rem;
    border-top: 1px solid #000;
    padding: 10px;
    background-color: white;
    align-items: flex-start;
    transition: background-color 0.3s ease;
    line-height: 1;
  }

  :global(html, body) {
    height: 100%;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    --light: #f5f5f5;
    --dark: rgb(20, 20, 20);
    --highlite: #2303fc;
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

  @font-face {
    font-family: "space mono";
    src: url("/SpaceMono-Regular.ttf");
    font-weight: normal;
  }

  @font-face {
    font-family: "space mono";
    src: url("/SpaceMono-Bold.ttf");
    font-weight: bold;
  }
</style>
