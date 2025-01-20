<script lang="ts">
	import type { AllianceInfo } from "$lib/types";
	import RankingPoints from "./RankingPoints.svelte";
	import Reef from "./widgets/Reef.svelte";
	import Barge from "./widgets/Barge.svelte";
	import Algae from "./widgets/Algae.svelte";
	import General from "./widgets/General.svelte";

    export let alliance: AllianceInfo;

    let scores = {
        reef: 0,
        algae: 0,
        barge: 0,
        general: 0
    }

    $: {
        alliance.score = scores.algae + scores.barge + scores.general + scores.reef;

        let autoCoralScored = 0;
        alliance.points.reef.forEach((level)=>{
            autoCoralScored += level.auto;
        })

        if (alliance.points.robotLeaveCount >= 3 && autoCoralScored >= 1) 
            alliance.points.rankingPoints.auto = 1;
        else 
            alliance.points.rankingPoints.auto = 0;
    }

</script>

<div class="wrapper">
    <div class="header">
        <div class="inputs">
            <div class="input color" style="--alliance-color:{alliance.color}">
                <input type="color" bind:value={alliance.color} maxlength="16">
            </div>
            <div class="input">
                <input class="editable-name" size={alliance.name.length ?? 0} type="text" bind:value={alliance.name} maxlength="20" placeholder="New Alliance">
            </div>
        </div>
        <RankingPoints points={alliance.points.rankingPoints} color={alliance.color}></RankingPoints>
        <h2 class="score">Total Score: {alliance.score}</h2>
    </div>
    <div class="container" style="--border-color:{alliance.color}">
        <General 
            bind:robotLeaveCount={alliance.points.robotLeaveCount} 
            bind:score={scores.general} 
            bind:coopertition={alliance.points.rankingPoints.coopertition}
        />

        <Algae 
            bind:score={scores.algae}
            bind:algae={alliance.points.algae}
        />

        <Reef 
            bind:values={alliance.points.reef}
            bind:score={scores.reef} 
            bind:coopertition={alliance.points.rankingPoints.coopertition} 
            bind:coralRP={alliance.points.rankingPoints.coral}
        />

        <Barge 
            bind:score={scores.barge} 
            bind:robots={alliance.points.barge}
            radioColor={alliance.color} 
            bind:bargeRP={alliance.points.rankingPoints.barge}
        />
    </div>
</div>

<style>
    .editable-name {
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 1.75rem;
        width: fit-content;
        box-sizing: border-box;
        background-color: #131313;
        padding: 0.5rem;
        border: none;
        transform: translateY(-0.1rem);
    }

    .editable-name:focus {
        font-family: 'IBM Plex Mono', monospace;
    }

    .inputs {
        display: flex;
        align-items: center;
        gap:0.5rem;
    }

    .input {
        display: flex;
        width: fit-content;
        border: 1px solid;
        border-color: #39393900;
        border-radius: 5px;
        overflow: hidden;   
        transition: border-color 0.25s ease;
        margin: 1rem 0 0.5rem 0;
    }

    .input.color {
        background-color: var(--alliance-color);
        border-color: #393939ff;
        border-radius: 150%;
    }

    .input:focus-within {
        border-color: #E4A234;
        transition: border-color 0.25s ease;
    }
    

    input[type=color] {
        width: 1.5rem;
        height: 1.5rem;
        opacity: 0;
    }

    .wrapper {
        display:flex;
        width: 100%;
        flex-direction: column;
    }

    .container {
        display:flex;
        flex-wrap: wrap;
        width: 100%;
        border: 1px var(--border-color) solid;
        justify-content: center;
        padding: 1rem 0 1rem 0;
        border-radius: 0.5rem;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .score {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1rem;
    }

    h2 {
        font-weight: 500;
        /* width:; */
        text-align: end;
    }

    @media only screen and (max-width: 670px) {
        .inputs {
            width:100%;
        }

        .input {
            margin-bottom: 0;
        }
        
        .header {
            flex-wrap: wrap;
            justify-content: spacee;
            margin-bottom: 0.5rem;
        }
    }

</style>