<script lang="ts">
	import type { AllianceInfo, FieldElementConfig } from "$lib/types";
	import FieldElement from "./FieldElement.svelte";
	import RankingPoints from "./RankingPoints.svelte";
	import Reef from "./Reef.svelte";
	import Barge from "./Barge.svelte";

    export let alliance: AllianceInfo;

    let scores = {
        reef: 0,
        algae: 0,
        barge: 0,
        general: 0
    }

    let autoCoralScored = 0;

    export let special = {
        coopertition: 0,
        auto: 0,
        coral: 0,
        barge: 0
    }

    $: {
        alliance.score = scores.algae + scores.barge + scores.general + scores.reef;

        special.auto = scores.general >= 9 && autoCoralScored >= 1 ? 1 : 0;
    }


    let algaeConfig: FieldElementConfig = {
        name: "Algae",
        category:{
            Location: [
                {
                    label: "Processor",
                    value: 0,
                    increment: 6
                },
                {
                    label: "Net",
                    value: 0,
                    increment: 4
                }
            ]
        }
    }

    let general: FieldElementConfig = {
        name: "General",
        category:{
            Auto: [
                {
                    label: "Robot Left Start",
                    value: 0,
                    increment: 3,
                    max: 3
                }
            ],
            Coopertition: [
                {
                    label: "2 algae in each processor",
                    value: 0,
                    increment: 0,
                    coopertition: true,
                    max: 1
                }
            ],
        }
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
        <RankingPoints points={special}></RankingPoints>
        <h2 class="score">Total Score: {alliance.score}</h2>
    </div>
    <div class="container" style="--border-color:{alliance.color}">
        <!-- <FieldElement config={reefConfig}></FieldElement> -->
        <Reef bind:score={scores.reef} bind:coopertition={special.coopertition} bind:coralRP={special.coral} bind:autoCount={autoCoralScored}></Reef>
        <FieldElement config={algaeConfig} bind:score={scores.algae}></FieldElement>
        <Barge bind:score={scores.barge} radioColor={alliance.color} bind:bargeRP={special.barge}></Barge>
        <FieldElement config={general} bind:score={scores.general} bind:coopertition={special.coopertition}></FieldElement>
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