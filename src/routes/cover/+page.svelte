<script>
  import html2canvas from "html2canvas";
  import Viz1 from "$lib/components/Viz.svelte";
  import Viz3 from "$lib/components/Viz3.svelte";

  let imageWidth = 1800;
  let imageHeight = 300;
  let grid = 15;
  let highlite = "#a8ff00";
  let background = "#efefef";

  let asciiGradient = "▚▀▓▒░#@■□▪▫/*+=-~◆◇⬤▚▀▓▒░◯○^:,._▚▀▓▒░#@■□▪▫:·";
  let scale = 0.01;
  let speed = 0.005;
  let imageURL = "";

  let container;
</script>

<div class="toolkit">
  <div class="controls">
    <label>
      Width (px):
      <input type="number" bind:value={imageWidth} min="200" />
    </label>
    <label>
      Height (px):
      <input type="number" bind:value={imageHeight} min="200" />
    </label>
    <label>
      Grid Size:
      <input type="number" bind:value={grid} min="10" max="50" />
    </label>
    <label>
      Noise Scale:
      <input
        type="number"
        bind:value={scale}
        min="0.001"
        max="0.1"
        step="0.001"
      />
    </label>

    <label>
      Highlited Color:
      <input type="color" bind:value={highlite} />
    </label>

    <label>
      Background Color:
      <input type="color" bind:value={background} />
    </label>
  </div>

  <div class="viz-wrapper">
    <div class="viz-item">
      <Viz1
        {grid}
        {asciiGradient}
        {scale}
        {speed}
        {highlite}
        {imageURL}
        {imageWidth}
        {imageHeight}
        {background}
        endColor={background}
        resize={true}
      />
    </div>
  </div>
  <div class="viz-wrapper">
    <div class="viz-item">
      <Viz3
        {grid}
        {asciiGradient}
        {scale}
        {speed}
        {highlite}
        {imageURL}
        {imageWidth}
        {imageHeight}
        {background}
        endColor={background}
        resize={true}
      />
    </div>
  </div>
</div>

<style>
  .toolkit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }
  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .controls label {
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    font-size: 14px;
  }
  .controls input {
    margin: 5px;
    font-size: 14px;
  }

  .viz-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .viz-item {
    flex: 1;
    position: relative;
    border-right: 1px solid #ccc;
  }
  .viz-item:last-child {
    border-right: none;
  }
  :global(.viz-container) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  :global(canvas) {
    display: block;
  }
</style>
