<script>
  import { onMount } from "svelte";
  import P5 from "p5-svelte";
  import html2canvas from "html2canvas";

  let customText = "DATA | ART";
  let imageWidth = 1200;
  let imageHeight = 800;
  let grid = 15;

  let highlite = "#ff00ae";

  let container;

  let asciiGradient = "▚▀▓▒░#@■□▪▫/*+=-~◆◇⬤▚▀▓▒░◯○^:,._▚▀▓▒░#@■□▪▫:·";
  let scale = 0.01;
  let t = 0;
  let speed = 0.005;
  let baseHue = 0;

  let imageURL = "";
  let loadedImage = null;
  let imageMargin = grid * 3;
  let p5Instance = null;

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

  let sketch = (p) => {
    p.setup = () => {
      p.createCanvas(innerWidth, innerHeight);
      p.textFont("Courier");
      p.textAlign(p.CENTER, p.CENTER);
      p.noStroke();
      p.frameRate(20);
      p5Instance = p;
    };

    p.draw = () => {
      p.background("#f1f1f1");

      const activity = 1;
      t += activity * speed;
      baseHue = (baseHue + 1) % 255;

      renderASCII(t, activity, scale);

      if (imageURL && (!loadedImage || loadedImage.url !== imageURL)) {
        p.loadImage(imageURL, (img) => {
          img.url = imageURL;
          loadedImage = img;
        });
      }
      if (loadedImage) {
        let availW = imageWidth - 2 * imageMargin;
        let availH = imageHeight - 2 * imageMargin;
        let s = Math.min(
          availW / loadedImage.width,
          availH / loadedImage.height
        );
        let dw = loadedImage.width * s;
        let dh = loadedImage.height * s;
        let dx = (imageWidth - dw) / 2;
        let dy = (imageHeight - dh) / 2;
        p.image(loadedImage, dx, dy, dw, dh);
      }
    };

    function renderASCII(time, energy, dynamicScale) {
      const gridCols = p.floor(imageWidth / grid);
      const gridRows = p.floor(imageHeight / grid);
      const charSize = imageWidth / gridCols;
      p.textSize(charSize);

      const xOffset = time * 0.9;
      const yOffset = time * 0.9;

      for (let y = 0; y < gridRows; y++) {
        for (let x = 0; x < gridCols; x++) {
          const noiseValue = p.noise(
            (x + xOffset) * dynamicScale,
            (y + yOffset) * dynamicScale,
            time
          );

          const jitterX = p.sin(time + y * 0.1);
          const jitterY = p.cos(time + x * 0.1);

          const charIndex = p.floor(
            p.map(noiseValue, 0, 1, 0, asciiGradient.length - 1)
          );
          const asciiChar = asciiGradient.charAt(charIndex);

          const xPos = x * charSize + charSize / 2 + jitterX;
          const yPos = y * charSize + charSize / 2 + jitterY;

          p.fill("#ffffff");
          if (asciiChar == "◯" || asciiChar == "." || asciiChar == "*") {
            p.fill(highlite);
          }

          p.push();
          p.translate(xPos, yPos);
          p.text(asciiChar, 0, 0);
          p.pop();
        }
      }
    }

    p.windowResized = () => {
      p.resizeCanvas(imageWidth, imageHeight);
    };
  };
</script>

<div class="toolkit">
  <div class="controls">
    <label>
      Text:
      <input
        type="text"
        bind:value={customText}
        placeholder="Enter your text"
      />
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
    <button on:click={savePNG}>Download Image</button>
  </div>

  <div
    class="canvas-container"
    bind:this={container}
    style="width: {imageWidth}px; height: {imageHeight}px; --overlay-color: {highlite};"
  >
    <div class="viz-container">
      <P5 {sketch} />
    </div>

    <div class="text-overlay" style="width: {imageWidth - 20}px">
      {#each Array(7) as _, i}
        <div style="--index: {i + 1 - 4}">
          {customText}
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
  .viz-container {
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
    -webkit-text-stroke: 0.5px #000;
    transform: translateY(calc(-50% + var(--index) * 0.18ex));
  }

  .text-overlay div:nth-child(4) {
    color: black;
  }
</style>
