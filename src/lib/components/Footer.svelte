<section>
  <div>
    <img style="max-height: 40px;" src="./logos/harvard.png" alt="" />
    <img style="max-height: 60px;" src="./logos/CCNR.jpg" alt="" />
    <img src="./logos/barabasi.png" alt="" />
    <img style="max-height: 40px;" src="./logos/mlml.gif" alt="" />
  </div>
</section>

<style>
  section {
    background: white;
    border-top: 1px solid #000;
    padding-top: 20px;
    padding-bottom: 10px;
  }

  div {
    max-width: 1024px;
    margin: 10px auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  img {
    max-height: 33px;
  }

  @media (max-width: 600px) {
    div,
    img {
      display: block;
      margin: 20px auto;
    }
  }
</style>
