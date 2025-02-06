<script>
  import P5 from "p5-svelte";

  let container;

  const sketch = (p) => {
    let gridX = 200;
    let gridY = 2;
    let speeds = [];
    let rowNoises = [];
    let canvasHeight;

    p.setup = () => {
      canvasHeight = container ? container.offsetHeight : 300;
      p.createCanvas(p.windowWidth, canvasHeight);
      p.noStroke();
      p.rectMode(p.CORNER);

      updateSpeeds();
      updateRowNoises();
      p.background(255);
    };

    p.draw = () => {
      p.background(255);

      // if (p.frameCount % 10 === 0) {
      //     gridX = p.map(p.mouseX, 0, 500, 2, 300);
      //     gridY = p.map(p.mouseY, 0, 500, 2, 10);
      //     updateSpeeds();
      //     updateRowNoises();
      // }

      const tileWidth = p.width / gridX;
      const tileHeight = p.height / gridY;

      const time = p.millis() * 0.01;

      for (let y = 0; y < gridY; y++) {
        const velocity = speeds[y] * 0.01;
        const stepNoise = rowNoises[y % rowNoises.length];

        for (let x = 0; x < gridX; x++) {
          const px = x * tileWidth;
          const py = y * tileHeight;

          const randVal = pattern(x, y, time, velocity, stepNoise);
          const brightness = p.map(randVal, 0, 1, 0, 255);
          const rectHeight = p.map(randVal, 0, 1, tileHeight * 0.1, tileHeight);

          p.fill(245, 245, 245, brightness);
          // p.stroke(245);
          // p.noStroke();
          p.rect(px, py, tileWidth, rectHeight);
        }
      }
    };

    const updateSpeeds = () => {
      speeds = [];
      for (let i = 0; i < gridY; i++) {
        speeds.push(p.random(-2, 2));
      }
    };

    const updateRowNoises = () => {
      rowNoises = [];
      for (let i = 0; i < gridY; i++) {
        rowNoises.push(p.random(0.1, 0.9));
      }
    };

    const pattern = (x, y, time, velocity, stepNoise) => {
      const st = p.createVector(x, y);
      const vel = p.createVector(-time * Math.max(gridX, gridY) * velocity, 0);
      const gridPos = p.createVector(
        p.floor(st.x + vel.x),
        p.floor(st.y + vel.y)
      );
      return step(stepNoise, random2D(gridPos));
    };

    const step = (edge, value) => (value < edge ? 0.0 : 1.0);

    const random2D = (st) =>
      p.fract(Math.sin(st.x * 12.9898 + st.y * 78.233) * 43758.5453123);

    p.windowResized = () => {
      canvasHeight = container ? container.offsetHeight : 300;
      p.resizeCanvas(p.windowWidth - 10, canvasHeight);
    };
  };
</script>

<div bind:this={container} class="viz-container">
  <P5 {sketch} />
</div>

<style>
  .viz-container {
    width: 100%;
    height: 100%;
    /* max-height: 300px; */
    position: relative;
  }

  :global(canvas) {
    display: block;
  }
</style>
