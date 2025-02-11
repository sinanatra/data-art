<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import palette from "$lib/stores";

  export let data;
  export let introductionText;
  let selected = null;
  let container;

  const groupedByDate = data.reduce((groups, item) => {
    if (!groups[item.Date]) {
      groups[item.Date] = [];
    }
    groups[item.Date].push(item);
    return groups;
  }, {});

  const categoryColors = data.reduce((acc, d) => {
    if (!acc[d.Category]) {
      const colorIndex = Object.keys(acc).length % palette.length;
      acc[d.Category] = palette[colorIndex];
    }
    return acc;
  }, {});

  let visibleSpeakers = [];
  let allSpeakers = [];

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  Object.entries(groupedByDate).forEach(([date, items]) => {
    items.forEach((item, index) => {
      allSpeakers.push({
        ...item,
        key: `${date}-${item.Speaker}-${index}`,
        date,
      });
    });
  });

  allSpeakers = shuffle(allSpeakers).map((speaker, index) => ({
    ...speaker,
    delay: index * 100,
  }));

  function loadNextSpeaker() {
    if (visibleSpeakers.length < allSpeakers.length) {
      visibleSpeakers = [
        ...visibleSpeakers,
        allSpeakers[visibleSpeakers.length],
      ];
      setTimeout(loadNextSpeaker, 100);
    }
  }
  loadNextSpeaker();

  function handleClickOutside(event) {
    if (container && !container.contains(event.target)) {
      selected = null;
    }
  }

  onMount(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<section
  class="grid-container"
  bind:this={container}
  style="min-height: {allSpeakers.length * 40}px;"
>
  {#if introductionText}
    <div class="description-container">
      <p class="placeholder-text">{introductionText}</p>
    </div>
  {/if}

  <div class="speakers-list">
    {#each visibleSpeakers as d (d.key)}
      <div
        class="grid-row name-entry"
        on:click={() =>
          (selected = selected && selected.key === d.key ? null : d)}
        in:fly={{ y: 500, duration: 300 }}
        out:fade
      >
        <div
          class="name"
          style="background-image: linear-gradient(to right, var(--highlite-1), {categoryColors[
            d.Category
          ]});"
        >
          {d.Speaker}
        </div>
      </div>
      {#if selected && selected.key === d.key}
        <div class="detail-row">
          <div class="selected-speaker">
            {#if d.Picture}
              <img src={d.Picture} alt={d.Speaker} />
            {/if}
            <div class="speaker-info">
              <h3>{d.Speaker}</h3>
              <p>{d.Bio}</p>
              {#if d.Url}
                <a href={d.Url} target="_blank" rel="noopener noreferrer">
                  {d.Url}
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 6fr 4fr;
    height: 100%;
  }

  .description-container {
    background-color: white;
    padding: 10px;
    padding-bottom: 50px;
    border-right: 1px solid #000;
  }

  .placeholder-text {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 1.6rem;
    margin: 0;
  }

  .speakers-list {
    overflow-y: auto;
  }

  .grid-row {
    display: grid;
    font-size: 1rem;
    grid-template-columns: 1fr;
    align-items: flex-start;
    border-bottom: 1px solid #000;
    transition: background-color 0.3s ease;
    line-height: 2;
  }

  .grid-row:hover {
    background-image: linear-gradient(
      to right,
      var(--highlite),
      var(--highlite)
    );
  }

  .name-entry {
    position: relative;
    cursor: pointer;
  }

  .name {
    padding: 0 5px;
  }

  .detail-row {
    background-color: white;
    padding: 10px;
    border-bottom: 1px solid #000;
  }

  .selected-speaker {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .selected-speaker img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border: 1px solid;
  }

  .speaker-info {
    flex: 1;
    max-width: 640px;
    width: 100%;
  }

  .speaker-info h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }

  .speaker-info p {
    margin: 10px 0;
    color: #555;
  }

  .speaker-info a {
    text-decoration: none;
    color: var(--highlite);
    font-weight: bold;
    word-break: break-all;
  }

  .speaker-info a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
    }

    .description-container {
      border-right: none;
      border-bottom: 1px solid #000;
    }

    .grid-row {
      font-size: 1.4rem;
      line-height: 2;
    }

    .selected-speaker img {
      width: 100%;
      max-height: 200px;
      object-fit: contain;
      height: auto;
      border: none;
    }

    .speaker-info h3 {
      font-size: 1.2rem;
    }

    .speaker-info p {
      font-size: 0.9rem;
    }
  }
</style>
