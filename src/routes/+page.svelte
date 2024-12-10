<script>
    import * as d3 from "d3";
    import Header from "$lib/components/Header.svelte";
    import Column from "$lib/components/Column.svelte";

    import { onMount } from "svelte";

    let data = [];

    onMount(async () => {
        try {
            const response = await fetch(
                "https://docs.google.com/spreadsheets/d/1k3pYfMouxEuUSszoOD2xKOtbBdUiVMvDBWhQrxB0cHc/gviz/tq?tqx=out:csv",
            );

            if (!response.ok) {
                console.error(
                    "Failed to fetch CSV:",
                    response.status,
                    response.statusText,
                );
                return;
            }

            const csvData = await response.text();

            data = d3.csvParse(csvData, (d) => ({
                ...d,
            }));
        } catch (error) {
            console.error("Error fetching or parsing CSV:", error);
        }
    });
</script>

<article>
    <Header />
    {#if data.length > 0}
        <Column {data} />
    {/if}
</article>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        --light: #f5f5f5;
        --dark: rgb(20, 20, 20);
        font-family: space, sans-serif;
        font-feature-settings: "liga", "ss03", "ss02";
        text-rendering: optimizeLegibility;
        font-size: 16px;
        background-color: var(--light);
    }

    :global(a) {
        color: var(--dark);
        text-decoration: underline;
    }

    :global(::selection) {
        color: var(--light);
        background-color: var(--dark);
    }

    article {
        color: var(--dark);
        padding: 0 5px;
    }

    @font-face {
        font-family: space;
        src: url("/SpaceGrotesk-Regular.woff2");
        font-weight: normal;
    }

    @font-face {
        font-family: space;
        src: url("/SpaceGrotesk-Medium.woff2");
        font-weight: bold;
    }

    @font-face {
        font-family: "Space Mono";
        src: url("/SpaceMono-Regular.ttf");
        font-style: regular;
    }

    @font-face {
        font-family: "Space Mono";
        src: url("/SpaceMono-Italic.ttf");
        font-style: italic;
    }
</style>
