<script lang="ts">
	import Counter from "../Counter.svelte";

    export let score = 0, color: string = "#393939";

    export let robotLeaveCount = 0, coopertition = 0;

    $: {
        score = robotLeaveCount * 3
    }
</script>

<div class="container" style="--border-color:{color}">
    <div class="header">
        <h3 class="label">General</h3>
        <h3 class="score">{score}</h3>
    </div>

    <div class="body">
        <span>Auto</span>
        <Counter label="Robot Left Start" bind:value={robotLeaveCount} multiplier={3} max={3}></Counter>

        <span>Coopertition</span>
        <Counter label="2 algae in each processor" bind:value={coopertition} multiplier={0} max={1}></Counter>
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
    
    
    span {
        width: 100%;
        padding-bottom: 0.5rem;
        font-weight: 600;
        color:#606060;
    }

    span:not(:first-of-type) {
        padding-top: 1rem;
    }

    @media only screen and (max-width: 670px) {
        .container {
            width:100%;
        }
    }
</style>