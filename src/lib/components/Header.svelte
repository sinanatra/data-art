<script>
  import Viz from "$lib/components/Viz.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import { base } from "$app/paths";
</script>

<header>
  <div class="header-grid">
    <div class="header-title">
      <Logo />
    </div>
  </div>

  <div class="viz">
    <Viz />
    <div class="links">
      <a href="{base}/">data|art</a> |
      <!-- <a href="{base}/schedule">schedule</a> | -->
      <a href="{base}/about">about</a> |
      <a href="{base}/toolkit">toolkit</a> |
      <!-- <a
                href="https://docs.google.com/spreadsheets/d/1k3pYfMouxEuUSszoOD2xKOtbBdUiVMvDBWhQrxB0cHc/edit?gid=0#gid=0usp=sharing"
                target="_blank"
                rel="noopener noreferrer">Source</a
            > -->
    </div>
  </div>
</header>

<style>
  .viz {
    position: absolute;
    top: 0;
    /* max-height: 300px; */
    width: 100%;
    height: 100%;
    z-index: 0;
    border-bottom: 1px solid;
  }

  .links {
    position: absolute;
    bottom: 10px;
    left: 5px;
    cursor: pointer;
    z-index: 100;
    font-size: 1.3rem;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    /* font-size: 14px; */

    font-family: space, monospace;
  }

  header {
    position: relative;
    color: var(--dark);
    padding: 10px 0px 20px 0px;
    font-size: 14px;
    line-height: 1.1;
    min-height: 560px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  .header-grid {
    display: grid;
  }

  .header-title {
    text-align: left;
    font-weight: bolder;
    z-index: 1;
    padding: 5px;
  }

  .header-description {
    font-family: "Space Mono", monospace;
    /* font-style: italic; */
  }
</style>
