<script lang="ts">
	import type { FieldElementConfig } from "$lib/types";
	import Counter from "./Counter.svelte";

    export let score = 0, color: string = "#393939", count = 0;
    export let config: FieldElementConfig;

    let categories = Object.keys(config.category)

    export let coopertition = 0;

    $: {
        let tempScore = 0, tempCount = 0

        categories.forEach((category)=>{
            config.category[category].forEach((method)=>{
                tempScore += method.value * method.increment
                tempCount += method.value
            })
        })

        score = tempScore;
        count = tempCount;
    }
</script>

<div class="container" style="--border-color:{color}">
    <div class="header">
        <h3 class="label">{config.name}</h3>
        <h3 class="score">{score}</h3>
    </div>

    <div class="body">
        {#each categories as category}
            <span>{category}</span>
            {#each config.category[category] as method}
                {#if method.coopertition}
                    <Counter label={method.label} bind:value={coopertition} multiplier={method.increment} max={method.max}></Counter>
                    {:else}
                    <Counter label={method.label} bind:value={method.value} multiplier={method.increment} max={method.max}></Counter>
                {/if}
                <!-- <button on:click={()=>addScore(method.increment)}>{method.label}</button> -->
            {/each}
        {/each}
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