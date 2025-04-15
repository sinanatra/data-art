<script>
  import P5 from "p5-svelte";

  export let grid = 50;
  export let gridY = 2;
  export let gradientWidth = 10;

// 50 40 5

  // export let highlite = "#958cba";
  export let endColor = "#efefef";

  const fixedSat = 30;
  const fixedBri = 100;
  const randomHue = Math.floor(Math.random() * 360);
  const randomHighlite = rgbToHex(...hsbToRgb(randomHue, fixedSat, fixedBri));
  // export let highlite = randomHighlite;
  export let highlite = "#2303FC";

  function hsbToRgb(h, s, b) {
    s = s / 100;
    b = b / 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b - b * s * Math.max(Math.min(k(n), 4 - k(n), 1), 0);
    return [
      Math.round(f(5) * 255),
      Math.round(f(3) * 255),
      Math.round(f(1) * 255),
    ];
  }

  function rgbToHex(r, g, b) {
    const toHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return "#" + toHex(r) + toHex(g) + toHex(b);
  }

  export let imageURL = "";
  export let imageWidth = 1200;
  export let imageHeight = 800;
  export let resize;

  let container;
  let p5Instance;
  let loadedImage = null;
  let canvasHeight;

  let rowOffsets = [];
  let speeds = [];

  function updateSpeed() {
    for (let i = 0; i < gridY; i++) {
      rowOffsets[i] = p5Instance ? p5Instance.random(0, grid) : 0;
      speeds[i] = p5Instance ? p5Instance.random(-0.1, 0.1) : 0;
    }
  }

  let sketch = (p) => {
    p.setup = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      p.createCanvas(w, h);
      p.noStroke();
      p.rectMode(p.CORNER);

      updateSpeed();
      p.background(255);

      p._grid = grid;
      p._gridY = gridY;
      p._gradientWidth = gradientWidth;

      p._startColor = highlite;
      p._endColor = endColor;
      p._imageURL = imageURL;
      p._imageWidth = imageWidth;
      p._imageHeight = imageHeight;

      p5Instance = p;
    };

    p.draw = () => {
      p.fill(255, 20);
      p.rect(0, 0, p.width, p.height);

      const tileWidth = p.width / p._grid;
      const tileHeight = p.height / p._gridY;

      for (let i = 0; i < p._gridY; i++) {
        rowOffsets[i] = (rowOffsets[i] + speeds[i]) % p._grid;
      }

      if (p.frameCount % 120 === 0) {
        grid = p.random([50, 75, 100]);
        gridY = p.random([2, 3, 4, 5, 10, 20]);
        gradientWidth = p.random([5, 7, 10, 15, 20]);

        if (["#2303FC", "#ff8501", "#00ff02"].includes(highlite)) {
          highlite = p.random(["#2303FC", "#ff8501", "#00ff02"]);
        }
      }

      let mainCol = p.color(p._startColor);

      p.colorMode(p.HSB, 360, 100, 100, 100);

      let secondaryHue = (p.hue(mainCol) + 236) % 360;
      let secondaryCol = p.color(
        secondaryHue,
        p.saturation(mainCol),
        p.brightness(mainCol)
      );
      let tertiaryHue = (p.hue(secondaryCol) + 236) % 360;
      let tertiaryCol = p.color(
        tertiaryHue,
        p.saturation(mainCol),
        p.brightness(mainCol)
      );

      p.colorMode(p.RGB);

      for (let row = 0; row < p._gridY; row++) {
        for (let col = 0; col < p._grid; col++) {
          let x = col * tileWidth;
          let y = row * tileHeight;
          let stripeCenter = col + 0.5;
          let d = Math.abs(stripeCenter - rowOffsets[row]);
          if (d > p._grid / 2) {
            d = p._grid - d;
          }
          let factor = p.constrain(d / p._gradientWidth, 0, 1);
          let c;

          if (row % 4 === 0) {
            c = p.lerpColor(
              p.color(p._startColor),
              p.color(p._endColor),
              factor
            );
            // }
            // else if (row % 2 === 0) {
            // c = p.lerpColor(tertiaryCol, p.color(p._endColor), factor);
          } else {
            // c = p.lerpColor(secondaryCol, p.color(p._endColor), factor);
            c = p.lerpColor(
              p.color(p._startColor),
              p.color(p._endColor),
              factor
            );
          }

          p.fill(c);
          p.stroke(20);
          p.strokeWeight(0.3);
          p.rect(x, y, tileWidth, tileHeight);
        }
      }

      if (p._imageURL && (!loadedImage || loadedImage.url !== p._imageURL)) {
        p.loadImage(p._imageURL, (img) => {
          img.url = p._imageURL;
          loadedImage = img;
        });
      }
      if (loadedImage) {
        let margin = 30;
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

    p.windowResized = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      p.resizeCanvas(w, h);
    };
  };

  $: if (p5Instance) {
    p5Instance._grid = grid;
    p5Instance._gridY = gridY;
    p5Instance._gradientWidth = gradientWidth;
    p5Instance._startColor = highlite;
    p5Instance._endColor = endColor;
    p5Instance._imageURL = imageURL;
    p5Instance._imageWidth = imageWidth;
    p5Instance._imageHeight = imageHeight;
    updateSpeed();
  }

  $: if (p5Instance && imageWidth && imageHeight && resize == true) {
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
