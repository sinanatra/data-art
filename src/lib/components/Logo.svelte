<script>
  import { onMount } from "svelte";
  // (Optional: any additional JS logic can go here)
</script>

<section>
  <div class="logo">
    <div>DATA | ART</div>
    <div>DATA | ART</div>
    <div>DATA | ART</div>
    <div id="center">DATA | ART</div>
    <div>DATA | ART</div>
    <div>DATA | ART</div>
    <div>DATA | ART</div>
  </div>
</section>

<style>
  section {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Geologica", sans-serif;
    overflow-x: visible;
  }

  .logo {
    font-size: clamp(30px, 14vw, 60px);
    position: relative;
    width: max-content;
    height: max-content;
    user-select: none;
    font-family: geologica, sans-serif;
  }

  .logo div {
    position: absolute;
    left: 50%;
    top: 50%;
    white-space: nowrap;
    text-align: center;

    color: transparent;
    -webkit-text-stroke: 0.5px #000;

    /* filter: drop-shadow(1px 1px 5px rgba(255, 255, 255, 0.6)); */
    /* will-change: transform; */
    
    transform: translate(-50%, -80%) translateZ(0);
    animation: moveText 0.5s ease-out forwards;
  }

  @keyframes moveText {
    0% {
      transform: translate(-50%, -80%) translateZ(0);
    }
    100% {
      transform: translate(-50%, calc(-50% + var(--index) * 0.27ex))
        translateZ(0);
    }
  }

  .logo div {
    --index: calc(var(--n) - 4);
    animation-delay: calc(var(--n) * 0.1s);
  }

  .logo div:nth-child(1) {
    --n: 1;
  }
  .logo div:nth-child(2) {
    --n: 2;
  }
  .logo div:nth-child(3) {
    --n: 3;
  }
  .logo div:nth-child(4) {
    --n: 4;
  }
  .logo div:nth-child(5) {
    --n: 5;
  }
  .logo div:nth-child(6) {
    --n: 6;
  }
  .logo div:nth-child(7) {
    --n: 7;
  }

  .logo div:nth-child(4) {
    animation:
      moveText 0.5s ease-in-out forwards,
      colorChange 0.1s linear forwards;
    animation-delay: 0.5s, 1.5s;
    z-index: 100;
  }

  @keyframes colorChange {
    from {
      color: transparent;
    }
    to {
      color: black;
    }
  }
</style>
