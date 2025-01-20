<script lang="ts">
	import type { AutoTeleopPoints } from "$lib/types";
	import DoubleCounter from "../DoubleCounter.svelte";

    export let score = 0, color: string = "#393939", coopertition = 0, coralRP = 0;

    export let values: AutoTeleopPoints[]

    let multipliers = {
        auto: [
            3, 4, 6, 7
        ],
        teleop: [
            2, 3, 4, 5
        ]
    }

    $: {
        let total = 0;
        let levelsWithFiveCoral = 0;

        for(let i = 0; i < values.length; i++) {
            total += (values[i].auto * multipliers.auto[i]) + (values[i].teleop * multipliers.teleop[i]);

            if(values[i].auto + values[i].teleop  >= 5) levelsWithFiveCoral += 1;
        }

        score = total;
        
        if(levelsWithFiveCoral >= 4 || (coopertition && levelsWithFiveCoral >= 3)) coralRP = 1;
        else coralRP = 0;
    }

    
</script>

<div class="container" style="--border-color:{color}">
    <div class="header">
        <h3 class="label">Reef</h3>
        <h3 class="score">{score}</h3>
    </div>

    <div class="body">
        <div class="legend">
            <span>Auto</span>
            <span>Teleop</span>
        </div>
        <DoubleCounter label="Trough"  bind:autoValue={values[0].auto} bind:teleopValue={values[0].teleop}></DoubleCounter>
        <DoubleCounter label="Level 2" bind:autoValue={values[1].auto} bind:teleopValue={values[1].teleop}></DoubleCounter>
        <DoubleCounter label="Level 3" bind:autoValue={values[2].auto} bind:teleopValue={values[2].teleop}></DoubleCounter>
        <DoubleCounter label="Level 4" bind:autoValue={values[3].auto} bind:teleopValue={values[3].teleop}></DoubleCounter>
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
    
    .legend {
        display: flex;
        gap: 0.5rem;
        justify-content: right;
    }
    
    span {
        width: 5.6rem;
        padding-bottom: 0.5rem;
        font-weight: 600;
        color:#606060;
    }

    @media only screen and (max-width: 670px) {
        .container {
            width:100%;
        }
    }
</style>