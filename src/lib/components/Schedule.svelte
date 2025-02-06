<script>
  import { fade, fly } from "svelte/transition";

  export let data;

  const groupedByDate = data.reduce((groups, item) => {
    if (!groups[item.Date]) {
      groups[item.Date] = [];
    }
    groups[item.Date].push(item);
    return groups;
  }, {});

  const palette = [
    "#A8DADC",
    "#F4A261",
    "#E76F51",
    "#81B29A",
    "#F2CC8F",
    "#E9C46A",
    "#6D9DC5",
    "#FFB4A2",
    "#B7E4C7",
  ];

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
</script>

<section class="grid-container" style="min-height: {allRows.length * 2}px;">
  {#each visibleRows as row (row.key)}
    <div
      class="grid-row"
      in:fly={{ y: 500, duration: 300 }}
      out:fade
      style="background-image: linear-gradient(to left, {categoryColors[
        row.Category
      ]},var(--highlite));"
    >
      <p class="date">{row.displayDate}</p>
      <p class="time">{row.Time}</p>
      <p class="speaker">{row.Speaker}</p>
      <p class="event-title">{row.Event}</p>
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
    align-items: center;
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;
    border-bottom: 1px solid #000;
  }

  .date {
    font-weight: bold;
  }

  .time {
    text-align: right;
  }

  .speaker {
    font-style: italic;
  }

  p {
    margin: 0;
    padding: 2px;
  }
</style>
