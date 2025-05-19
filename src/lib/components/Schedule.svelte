<script>
  import { fade, fly } from "svelte/transition";
  import palette from "$lib/stores";

  export let data;

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

  let visibleRows = [];
  let allRows = [];

  Object.entries(groupedByDate).forEach(([date, events]) => {
    events.forEach((event, index) => {
      allRows.push({
        ...event,
        key: `${date}-${event.Event}-${index}`,
        displayDate: index === 0 ? date : "",
      });
    });
  });

  function loadNextRow() {
    if (visibleRows.length < allRows.length) {
      visibleRows = [...visibleRows, allRows[visibleRows.length]];
      setTimeout(loadNextRow, 100);
    }
  }

  loadNextRow();

  function formatDateUS(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
</script>

<section class="grid-container" style="min-height: {allRows.length * 3}px;">
  {#each visibleRows as row (row.key)}
    <div
      class="grid-row"
      in:fly={{ y: 500, duration: 100 }}
      out:fade
      style="background-image: linear-gradient(to left, {categoryColors[
        row.Category
      ]},var(--highlite-1));"
    >
      <p class="date">{formatDateUS(row.displayDate)}</p>
      <p class="time">{row.Time}</p>
      <p class="event-title">{row.Event}</p>
      <p class="speaker">{row.Speaker}</p>
    </div>
  {/each}
</section>

<style>
  .grid-container {
    display: grid;
  }

  .grid-row {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 3fr;
    font-size: 1rem;
    align-items: start;
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;
    border-bottom: 1px solid #000;
  }

  .grid-row:last-of-type {
    border-bottom: none;
  }

  .date {
    font-family: "space mono";
    font-weight: bold;
  }

  .time {
    font-family: space;
    font-weight: bold;
    text-align: right;
  }

  .speaker {
    font-style: italic;
  }

  p {
    margin: 0;
    padding: 5px 10px;

    vertical-align: top;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  @media (max-width: 768px) {
    .grid-row {
      display: block;
      font-size: 1.2rem;
      line-height: 1.4;
      padding: 10px;
    }

    .grid-row p {
      padding: 2px;
    }

    .date {
      font-size: 1.4rem;
    }

    .time {
      text-align: left;
    }
  }
</style>
