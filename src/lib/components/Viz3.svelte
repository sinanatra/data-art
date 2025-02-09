<script>
  import P5 from "p5-svelte";

  export let grid = 50;
  export let gridY = 2;
  export let gradientWidth = 10;

  export let highlite = "#0000ff";
  export let endColor = "#ffffff";

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
      speeds[i] = p5Instance ? p5Instance.random(0.1, 0.2) : 0;
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

      if (p.frameCount % 100 === 0) {
        gridY = p.random([2, 5, 10]);
        // updateSpeed();
      }

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
          let c = p.lerpColor(
            p.color(p._startColor),
            p.color(p._endColor),
            factor
          );
          p.fill(c);
          p.stroke(0);
          p.strokeWeight(0.2);
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
