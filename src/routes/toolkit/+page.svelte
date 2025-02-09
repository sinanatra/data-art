<script>
  import html2canvas from "html2canvas";
  import Viz from "$lib/components/Viz.svelte";

  let customText = "DATA | ART";
  let imageWidth = 600;
  let imageHeight = 600;
  let grid = 15;
  let highlite = "#ff0000";
  let textColor = "#000000";
  let background = "#efefef";

  let asciiGradient = "▚▀▓▒░#@■□▪▫/*+=-~◆◇⬤▚▀▓▒░◯○^:,._▚▀▓▒░#@■□▪▫:·";
  let scale = 0.01;
  let speed = 0.005;
  let imageURL = "";

  let container;

  function handleFileInput(e) {
    const file = e.target.files[0];
    if (file) imageURL = URL.createObjectURL(file);
  }

  function savePNG() {
    if (!container) return;
    html2canvas(container).then((canvas) => {
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "output.png";
      link.href = dataURL;
      link.click();
    });
  }
</script>

<div class="toolkit">
  <div class="controls">
    <label>
      Text:
      <textarea bind:value={customText} placeholder="Enter your text"
      ></textarea>
    </label>
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
      Load Image:
      <input type="file" accept="image/*" on:change={handleFileInput} />
    </label>
    <label>
      Highlited Color:
      <input type="color" bind:value={highlite} />
    </label>
    <label>
      Text Color:
      <input type="color" bind:value={textColor} />
    </label>
    <label>
      Background Color:
      <input type="color" bind:value={background} />
    </label>
    <button on:click={savePNG}>Download Image</button>
  </div>

  <div
    class="canvas-container"
    bind:this={container}
    style="width: {imageWidth}px; height: {imageHeight}px; --text-color: {textColor};"
  >
    <div class="viz-wrapper">
      <div class="viz-item">
        <Viz
          {grid}
          {asciiGradient}
          {scale}
          {speed}
          {highlite}
          {imageURL}
          {imageWidth}
          {imageHeight}
          {background}
          resize={true}
        />
      </div>
    </div>

    <div class="text-overlay" style="width: {imageWidth - 20}px">
      {#each Array(7) as _, i}
        <div style="--index: {i + 1 - 4}">
          {@html customText.replace(/\n/g, "<br/>")}
        </div>
      {/each}
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
  .canvas-container {
    position: relative;
    border: 1px solid #ccc;
    overflow: hidden;
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
  /* Ensure that the viz components’ canvases fill their containers */
  :global(.viz-container) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  :global(canvas) {
    display: block;
  }
  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-family: geologica, sans-serif;
    text-align: center;
    pointer-events: none;
    line-height: 80px;
    text-transform: uppercase;
    width: 100%;
  }
  .text-overlay div {
    position: absolute;
    width: 100%;
    color: transparent;
    -webkit-text-stroke: 0.5px var(--text-color);
    transform: translateY(calc(-50% + var(--index) * 0.18ex));
  }
  .text-overlay div:nth-child(4) {
    color: var(--text-color);
  }
</style>
