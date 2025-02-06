<script>
  import { onMount } from "svelte";

  let showTexts = false;

  let displayedData = "";
  let displayedArt = "";

  const fullTextData = "data";
  const dataLetters = [...fullTextData].reverse();

  const fullTextArt = "art";
  const artLetters = [...fullTextArt];

  const intervalDelay = 500;
  const pauseBetweenLoops = 3000;

  onMount(() => {
    showTexts = true;
    startTypingLoop();
  });

  function startTypingLoop() {
    let i = 0;
    displayedData = "";
    displayedArt = "";

    const maxLen = Math.max(dataLetters.length, artLetters.length);

    const interval = setInterval(() => {
      if (i < dataLetters.length) {
        displayedData = dataLetters[i] + displayedData;
      }
      if (i < artLetters.length) {
        displayedArt += artLetters[i];
      }

      i++;
      if (i >= maxLen) {
        clearInterval(interval);

        setTimeout(() => {
          startTypingLoop();
        }, pauseBetweenLoops);
      }
    }, intervalDelay);
  }
</script>

<section>
  {#if showTexts}
    {displayedData}
  {/if}

  <span class="divider">|</span>

  {#if showTexts}
    {displayedArt}
  {/if}
</section>

<style>
  section {
    display: inline-flex;
    font-size: 36px;
  }

  .divider {
    margin: 0 0.2rem;
  }
</style>
