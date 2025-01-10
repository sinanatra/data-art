<script>
    import Viz from "$lib/components/Viz.svelte";
</script>

<header>
    <div class="header-grid">
        <div class="header-title">
            <h1>data|art</h1>
        </div>
        <div class="header-description"></div>
    </div>

    <div class="viz">
        <Viz />
        <div class="links">
            <a href="/">Partecipants</a> |
            <a href="/schedule">Schedule</a> |
            <a
                href="https://docs.google.com/spreadsheets/d/1k3pYfMouxEuUSszoOD2xKOtbBdUiVMvDBWhQrxB0cHc/edit?gid=0#gid=0usp=sharing"
                target="_blank"
                rel="noopener noreferrer">Source</a
            >
        </div>
    </div>
</header>

<style>
    .viz {
        position: absolute;
        top: 0;
        /* max-height: 300px; */
        width: 100%;
        height: 100%;
        z-index: 0;
        border-bottom: 1px solid;
    }

    .links {
        position: absolute;
        bottom: 10px;
        left: 5px;
        cursor: pointer;
        z-index: 100;
    }

    a {
        cursor: pointer;
        /* text-decoration: none; */
        font-size: 14px;
        font-family: "Space Mono", monospace;
    }

    header {
        position: relative;
        /* background-color: var(--light); */
        color: var(--dark);
        padding: 10px 0px 20px 0px;
        font-size: 14px;
        line-height: 1.1;
        min-height: 360px;
    }

    .header-grid {
        display: grid;
        grid-template-columns: 1fr 4fr 5fr;
    }

    .header-title {
        text-align: left;
        font-weight: bolder;
        z-index: 1;
        padding: 5px;
    }

    .header-description {
        font-family: "Space Mono", monospace;
        /* font-style: italic; */
    }

    h1 {
        margin: 0;
        font-size: 1rem;
        font-family: "Space Mono", monospace;
    }
</style>
