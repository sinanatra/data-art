<script>
  import { page } from "$app/stores";
  import P5 from "p5-svelte";

  export let asciiGradient =
    "▚▀▓▒░#@■□▪▫/*+=-~◆◇⬤▚▀▓▒░◯○^:,._▚▀▓▒░#@■□▪▫:·";
  export let grid = 15;
  export let scale = 0.01;
  export let speed = 0.005;
  export let highlite = "#0000ff";
  export let imageURL = "";
  export let imageWidth = 1200;
  export let imageHeight = 800;

  let container;
  let t = 0;
  let baseHue = 0;
  let p5Instance;
  let loadedImage = null;

  let sketch = (p) => {
    p.setup = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      p.createCanvas(w, h);
      p.textFont("Courier");
      p.textAlign(p.CENTER, p.CENTER);
      p.noStroke();
      p.frameRate(20);

      p._asciiGradient = asciiGradient;
      p._grid = grid;
      p._scale = scale;
      p._speed = speed;
      p._highlite = highlite;
      p._imageURL = imageURL;
      p._imageWidth = imageWidth;
      p._imageHeight = imageHeight;

      p5Instance = p;
    };

    p.draw = () => {
      p.background("#efefef");

      const activity = 1;
      t += activity * p._speed;
      baseHue = (baseHue + 1) % 255;

      renderASCII(t, activity, p._scale);

      if (p._imageURL && (!loadedImage || loadedImage.url !== p._imageURL)) {
        p.loadImage(p._imageURL, (img) => {
          img.url = p._imageURL;
          loadedImage = img;
        });
      }
      if (loadedImage) {
        let margin = grid * 3;
        let availW = p._imageWidth - 2 * margin;
        let availH = p._imageHeight - 2 * margin;
        let s = Math.min(
          availW / loadedImage.width,
          availH / loadedImage.height
        );
        let dw = loadedImage.width * s;
        let dh = loadedImage.height * s;
        let dx = (p._imageWidth - dw) / 2;
        let dy = (p._imageHeight - dh) / 2;
        p.image(loadedImage, dx, dy, dw, dh);
      }
    };

    function renderASCII(time, energy, dynamicScale) {
      const gridCols = p.floor(p.width / p._grid);
      const gridRows = p.floor(p.height / p._grid);
      const charSize = p.width / gridCols;
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
            p.map(noiseValue, 0, 1, 0, p._asciiGradient.length - 1)
          );
          const asciiChar = p._asciiGradient.charAt(charIndex);

          const xPos = x * charSize + charSize / 2 + jitterX;
          const yPos = y * charSize + charSize / 2 + jitterY;

          if (asciiChar === "▪" || asciiChar === "○" || asciiChar === "◇") {
            p.fill(p._highlite);
          } else {
            p.fill("#ffffff");
          }

          // "▚▀▓▒░#@■□▪▫/*+=-~◆◇⬤▚▀▓▒░◯○^:,._▚▀▓▒░#@■□▪▫:·";

          p.push();
          p.translate(xPos, yPos);
          p.text(asciiChar, 0, 0);
          p.pop();
        }
      }
    }

    p.windowResized = () => {
      p.resizeCanvas(container?.offsetWidth, container?.offsetHeight);
    };
  };

  $: if (p5Instance) {
    p5Instance._asciiGradient = asciiGradient;
    p5Instance._grid = grid;
    p5Instance._scale = scale;
    p5Instance._speed = speed;
    p5Instance._highlite = highlite;
    p5Instance._imageURL = imageURL;
    p5Instance._imageWidth = imageWidth;
    p5Instance._imageHeight = imageHeight;
  }
  $: if (p5Instance && imageWidth && imageHeight && $page.route == "/toolkit") {
    p5Instance.resizeCanvas(imageWidth, imageHeight);
  }
</script>

<div class="viz-container" bind:this={container}>
  <P5 {sketch} />
</div>

<style>
  .viz-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  :global(canvas) {
    display: block;
  }
</style>
