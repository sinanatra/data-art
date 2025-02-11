<script>
  import html2canvas from "html2canvas";
  import Viz from "$lib/components/Viz3.svelte";

  let customText = "DATA | ART";
  let imageWidth = 600;
  let imageHeight = 600;
  let gradientWidth = 15;

  let hue = 120;

  $: highlite = `hsl(${hue}, 100%, 50%)`;

  let textColor = "#000000";
  let background = "#efefef";

  let asciiGradient = "▚▀▓▒░#@■□▪▫/*+=-~◆◇⬤▚▀▓▒░◯○^:,._▚▀▓▒░#@■□▪▫:·";
  let scale = 0.01;
  let speed = 0.005;
  let imageURL = "";

  let container;

  let presets = ["#2303FC", "#ff8501", "#00ff02"];

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

  function setPreset(color) {
    const hsl = hexToHSL(color);
    hue = hsl.h;
  }

  function hexToHSL(H) {
    let r = 0,
      g = 0,
      b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    const cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin;
    let h = 0;
    if (delta == 0) h = 0;
    else if (cmax === r) h = ((g - b) / delta) % 6;
    else if (cmax === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;

    return { h };
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
      gradient Size:
      <input type="number" bind:value={gradientWidth} min="1" max="100" />
    </label>
    <label>
      Load Image:
      <input type="file" accept="image/*" on:change={handleFileInput} />
    </label>

    <label>
      Color:
      <input type="range" min="0" max="360" bind:value={hue} />
      <span>{highlite}</span>
    </label>

    <div class="presets">
      {#each presets as preset}
        <button
          class="preset-button"
          on:click={() => setPreset(preset)}
          style="background-color: {preset};"
          title={preset}
        ></button>
      {/each}
    </div>
    <label>
      Text Color:
      <input type="color" bind:value={textColor} />
      <!-- </label> -->
      <!-- Background Color:
      <input type="color" bind:value={background} />
    </label> -->
      <button on:click={savePNG}>Download Image</button>
    </label>
  </div>

  <div
    class="canvas-container"
    bind:this={container}
    style="width: {imageWidth}px; height: {imageHeight}px; --text-color: {textColor};"
  >
    <div class="viz-wrapper">
      <div class="viz-item">
        <Viz
          {gradientWidth}
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
  .controls input,
  .controls textarea {
    margin: 5px 0;
    font-size: 14px;
  }
  .presets {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .preset-button {
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
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
