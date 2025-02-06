<script>
  import P5 from "p5-svelte";

  let container;

  let asciiGradient = "▚▀▓▒░#@■□▪▫/*+=-~◆◇⬤◯○^:,._▚▀▓▒░#@■□▪▫:·";

  let grid = 10;

  let scale = 0.01;
  let t = 0;
  let speed = 0.01;
  let baseHue = 0;

  let sketch = (p) => {
    p.setup = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      p.createCanvas(w, h);

      p.textFont("Courier");
      p.textAlign(p.CENTER, p.CENTER);
      p.noStroke();
      p.frameRate(30);
    };

    p.draw = () => {
      p.background("#f1f1f1");

      const activity = 1;

    //   if (p.frameCount % 100 === 0) {
    //     asciiGradient = p.random([
    //       "   ▍▎▏▚▀▓▉▊▋▌▍▎▏■□▪▫/*+=-:·▉▊▋▌▍▎▏|+=-:·",
    //       "   █▓▒░░▒▓█▉▊▋▌▍▎▏■□▪░▒▓.:-=+*#@",
    //       "   ▚▀▓▒░#@■□▪▫/*+=-~^:,._▚▀▓▒░#@■□▪▫:·",
    //       "   ▪▫@&%$O0o+=~-^:,._`'·▉▊▋▌▍▎▏░▒▓.:-+",
    //       "   ▉▊▋▌▍▎▚▀▓▒▉▊▋▌▍▎■□▪░▒▓█▍▎▏:·",
    //       "   ▒░▓█◆◇⬤◯○▋▍▎▏░▒▓▉▌░▒▓█",
    //     ]);
    //   }

      t += activity * speed;
      baseHue = (baseHue + 1) % 255;

      //   if (p.frameCount % 60 === 0) {
      //     scale = p.random([0.1, 0.01, 0.001]);
      //   }

      renderASCII(t, activity, scale);
    };

    function renderASCII(time, energy, dynamicScale) {
      const gridCols = p.floor(p.width / grid);
      const gridRows = p.floor(p.height / grid);
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
            p.map(noiseValue, 0, 1, 0, asciiGradient.length - 1)
          );
          const asciiChar = asciiGradient.charAt(charIndex);

          const xPos = x * charSize + charSize / 2 + jitterX;
          const yPos = y * charSize + charSize / 2 + jitterY;

          //   const brightness = p.map(noiseValue, 0, 1, 220, 255);
          //   p.fill(brightness);

          p.fill("#ffffff");

          p.push();
          p.translate(xPos, yPos);
          p.rotate(noiseValue * p.TWO_PI * 0.1);
          p.text(asciiChar, 0, 0);
          p.pop();
        }
      }
    }

    p.windowResized = () => {
      p.resizeCanvas(container.offsetWidth, container.offsetHeight);
    };
  };
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
