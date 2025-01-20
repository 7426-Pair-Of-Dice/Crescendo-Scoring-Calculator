<script lang="ts">
	import type { AlgaePoints } from "$lib/types";
	import Counter from "../Counter.svelte";

    export let score = 0, color: string = "#393939";

    export let algae: AlgaePoints;

    $: {
        score = (algae.processor * 6) + (algae.net * 4);
    }
</script>

<div class="container" style="--border-color:{color}">
    <div class="header">
        <h3 class="label">Algae</h3>
        <h3 class="score">{score}</h3>
    </div>

    <div class="body">
        <Counter label="Processor" bind:value={algae.processor} multiplier={6}></Counter>
        <Counter label="Net" bind:value={algae.net} multiplier={4}></Counter>
    </div>

</div>

<style>
    .container {
        border: 1px solid var(--border-color);
        border-radius: 0.5rem;
        margin: 1rem;
        padding: 1rem;
    }

    .body, .container {
        display: flex;
        flex-direction: column;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-bottom: 1rem;
    }

    .score {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 0.75rem;
        color:#aaaaaa
    }

    .header > * {
        margin: 0;
    }

    .container > * {
        margin: 0;
    }

    @media only screen and (max-width: 670px) {
        .container {
            width:100%;
        }
    }
</style>