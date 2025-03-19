<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";

  let csvData = [];

  const baseSheetURL =
    "https://docs.google.com/spreadsheets/d/1k3pYfMouxEuUSszoOD2xKOtbBdUiVMvDBWhQrxB0cHc/gviz/tq?tqx=out:csv";
  const tabs = {
    schedule: "gid=649727592",
  };

  onMount(async () => {
    try {
      const scheduleResponse = await fetch(`${baseSheetURL}&${tabs.schedule}`);
      if (scheduleResponse.ok) {
        const scheduleCSV = await scheduleResponse.text();
        csvData = d3.csvParseRows(scheduleCSV);
      }
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  });
</script>

{#if csvData.length > 0}
  <div class="container">
    {#each csvData as row, rowIndex}
      <div class="row">
        {#each row as cell, cellIndex}
          {#if rowIndex === 0 || cellIndex === 0}
            <div class="cell header">{@html cell}</div>
          {:else}
            <div class="cell">{@html cell}</div>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
{:else}
  <!-- <p>Loading data…</p> -->
{/if}

<style>
  .container {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 10px;
    padding-bottom: 20px;
    word-wrap: break-word;
    font-size: 1.6rem;
    min-height: 60vh;
  }

  :global(h2) {
    font-size: 1.2em;
    white-space: nowrap;
    margin: 10px 0 5px 0;
    padding: 0;
  }

  .row {
    display: flex;
    /* white-space: pre-wrap; */
    display: block;
  }

  .cell {
    flex: 1;
    max-width: 1024px;
    width: 100%;
    margin-bottom: 10px;
    white-space: pre-wrap;
  }

  .row .cell:last-child {
    border-right: none;
  }
  .header {
    background-color: transparent;
  }

  @media (max-width: 1024px) {
    .row {
      display: block;
    }
  }
</style>
