<script>
    import { fade, fly } from "svelte/transition";

    export let data;
    export let introductionText;
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

<section
    class="grid-container"
    style="min-height: {allSpeakers.length * 25}px;"
>
    <div class="speakers-list">
        {#each visibleSpeakers as d (d.key)}
            <div
                class="grid-row name-entry"
                on:click={() => (selected = d)}
                in:fly={{ y: 500, duration: 300 }}
                out:fade
            >
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
    <div class="description-container">
        {#if selected}
            <div class="selected-speaker">
                {#if selected.Picture}
                    <img src={selected.Picture} alt={selected.Speaker} />
                {/if}
                <div class="speaker-info">
                    <h3>{selected.Speaker}</h3>
                    <p>{selected.Bio}</p>
                    <a
                        href={selected.Url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        {:else}
            <p class="placeholder-text">
                {introductionText}
            </p>
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
        grid-template-columns: 6fr 4fr;
    }

    .grid-row {
        display: grid;
        grid-template-columns: 4fr;
        align-items: flex-start;
        border-bottom: 1px solid #000;
    }

    .grid-row:hover {
        background-color: violet;
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

    .description-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        padding: 10px;
        margin: 0;
        border: 0;
    }

    p {
        margin: 0;
        padding: 0;
        padding: 2px;

    }

    .selected-speaker {
        display: flex;
        gap: 20px;
    }

    .selected-speaker img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border: 1px solid;
    }

    .speaker-info {
        flex: 1;
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
        color: violet;
        font-weight: bold;
    }

    .speaker-info a:hover {
        text-decoration: underline;
    }

    .placeholder-text {
        white-space: pre-wrap;
        word-wrap: break-word;
    }
</style>
