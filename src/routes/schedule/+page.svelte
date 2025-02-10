<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import Schedule from "$lib/components/Schedule.svelte";

  let scheduleData = [];

  const baseSheetURL =
    "https://docs.google.com/spreadsheets/d/1k3pYfMouxEuUSszoOD2xKOtbBdUiVMvDBWhQrxB0cHc/gviz/tq?tqx=out:csv";
  const tabs = {
    schedule: "gid=190532547",
  };

  onMount(async () => {
    try {
      const scheduleResponse = await fetch(`${baseSheetURL}&${tabs.schedule}`);
      if (scheduleResponse.ok) {
        const scheduleCSV = await scheduleResponse.text();
        scheduleData = d3
          .csvParse(scheduleCSV, (row) => ({
            Date: row.Date,
            Time: row.Time,
            Event: row.Event,
            Speaker: row.Speaker,
            Category: row.Category,
            Visible: row.Visible,
          }))
          .filter((d) => d.Visible == "TRUE");
      }
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  });
</script>

<article>
  {#if scheduleData.length > 0}
    <Schedule data={scheduleData} />
  {:else}
    <!-- <p>To be announced...</p> -->
  {/if}
</article>

<style>
  article {
    color: var(--dark);
  }

  p {
    margin: 0;
    padding: 10px;
    font-size: 1.6rem;
  }
</style>
