<script>
    import { fade, fly } from "svelte/transition";
    import Email from "./Email.svelte";

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
        "#00FF00",
        "#FF4500",
        "#FF1493",
        "#00FFFF",
        "#FFD700",
        "#FF69B4",
        "#1E90FF",
        "#FF6347",
        "#ADFF2F",
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
                <div
                    class="name"
                    style="background-image: linear-gradient(to right,  var(--highlite), {categoryColors[
                        d.Category
                    ]});"
                >
                    {d.Speaker}
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
            <Email />
        {/if}
    </div>
</section>

<style>
    .grid-container > * {
        border-right: 1px solid;
    }

    .grid-container {
        display: flex;
        flex-direction: column;
        display: grid;
        grid-template-columns: 6fr 4fr;
        border-top: 1px solid;
    }

    .grid-row {
        display: grid;
        font-size: 1rem;
        grid-template-columns: 4fr;
        align-items: flex-start;
        border-bottom: 1px solid #000;
    }

    .grid-row:hover {
        background-image: linear-gradient(
            to right,
            var(--highlite-1),
            var(--highlite-1)
        );
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
        gap: 10px;
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
        color: var(--highlite-1);
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
