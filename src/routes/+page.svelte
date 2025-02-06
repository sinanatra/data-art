<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import Speakers from "$lib/components/Speakers.svelte";

  let introductionText = "";
  let speakerData = [];
  let scheduleData = [];

  const baseSheetURL =
    "https://docs.google.com/spreadsheets/d/1k3pYfMouxEuUSszoOD2xKOtbBdUiVMvDBWhQrxB0cHc/gviz/tq?tqx=out:csv";
  const tabs = {
    introduction: "gid=931769239",
    speakers: "gid=0",
    schedule: "gid=190532547",
  };

  onMount(async () => {
    try {
      const introResponse = await fetch(`${baseSheetURL}&${tabs.introduction}`);
      if (introResponse.ok) {
        const introCSV = await introResponse.text();
        const introData = d3.csvParseRows(introCSV);
        introductionText = introData.flat().join(" ");
      }

      const speakersResponse = await fetch(`${baseSheetURL}&${tabs.speakers}`);
      if (speakersResponse.ok) {
        const speakersCSV = await speakersResponse.text();
        speakerData = d3
          .csvParse(speakersCSV, (row) => ({
            Date: row.Date,
            Speaker: row.Speaker,
            Source: row.Source,
            Bio: row.Bio,
            Picture: row.Picture,
            Url: row.Url,
            Category: row.Category,
            Visible: row.Visible,
          }))
          .filter((d) => d.Visible == "TRUE");
      }

      const scheduleResponse = await fetch(`${baseSheetURL}&${tabs.schedule}`);
      if (scheduleResponse.ok) {
        const scheduleCSV = await scheduleResponse.text();
        scheduleData = d3.csvParse(scheduleCSV, (row) => ({
          Date: row.Date,
          Time: row.Time,
          Event: row.Event,
          Speaker: row.Speaker,
          Category: row.Category,
        }));
      }
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  });
</script>

<article>
  {#if speakerData.length > 0}
    <Speakers data={speakerData} {introductionText} />
  {:else}
    <Speakers data={speakerData} {introductionText} />
  {/if}
</article>

<style>
  article {
    color: var(--dark);
  }
</style>
