<script>
    import { fade, fly } from "svelte/transition";

    export let data;
    let selected = null;

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

    let visibleSpeakers = [];
    let allSpeakers = [];

    Object.entries(groupedByDate).forEach(([date, items]) => {
        items.forEach((item, index) => {
            allSpeakers.push({
                ...item,
                key: `${date}-${item.Speaker}-${index}`,
                date,
                delay: allSpeakers.length * 100,
            });
        });
    });

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
</script>

<section class="grid-container header">
    <div class="grid-row">
        <strong>Date</strong>
        <strong>Speakers</strong>
    </div>
    <strong>Info</strong>
</section>
<section
    class="grid-container"
    style="min-height: {allSpeakers.length * 30}px;"
>
    <div>
        {#each visibleSpeakers as d (d.key)}
            <div
                class="grid-row name-entry"
                on:click={() => (selected = d)}
                in:fly={{ y: 500, duration: 300 }}
                out:fade
            >
                <div class="grid-date">
                    {d.date}
                </div>
                <div class="grid-names">
                    <div
                        class="name"
                        style="background-image: linear-gradient(to right, transparent, {categoryColors[
                            d.Category
                        ]});"
                    >
                        {d.Speaker}
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <div class="description">
        {#if selected}
            {selected.Bio}
        {:else}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            laborum magni tempora tenetur adipisci voluptates reiciendis?
            Corporis ut voluptates, consequatur iusto quae officia totam
            eligendi fugit dolor animi! Ex, animi! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Odit laborum magni tempora tenetur
            adipisci voluptates reiciendis? Corporis ut voluptates, consequatur
            iusto quae officia totam eligendi fugit dolor animi! Ex, animi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            laborum magni tempora tenetur adipisci voluptates reiciendis?
            Corporis ut voluptates, consequatur iusto quae officia totam
            eligendi fugit dolor animi! Ex, animi!
        {/if}
    </div>
</section>

<style>
    .header {
        background-color: var(--light);
        border-bottom: 1px solid;
        border-top: 1px solid;
    }

    .header > * {
        border-bottom: none !important;
        padding: 0 5px;
    }

    .grid-container > * {
        border-right: 1px solid;
    }

    .grid-container {
        display: flex;
        flex-direction: column;
        display: grid;
        grid-template-columns: 5fr 5fr;
    }

    .grid-row {
        display: grid;
        grid-template-columns: 1fr 4fr;
        align-items: flex-start;
        border-bottom: 1px solid #000;
    }

    .grid-row:hover {
        background-color: #ff0000;
    }

    .grid-date {
        text-align: left;
        padding: 0 5px;
        font-size: 12px;
        font-family: "Space Mono";
    }

    .grid-names {
        display: flex;
        flex-direction: column;
    }

    .name-entry {
        position: relative;
    }

    .name {
        padding: 0 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .description {
        padding: 5px;
    }
</style>
