<script lang="ts">
	import type { AllianceInfo, FieldElementConfig } from "$lib/types";
	import FieldElement from "./FieldElement.svelte";
	import RankingPoints from "./RankingPoints.svelte";
	import Stage from "./Stage.svelte";

    export let alliance: AllianceInfo;

    let scores = {
        speaker: 0,
        amp: 0,
        stage: 0,
        general: 0
    }

    let notes = {
        amp: 0,
        speaker: 0
    }

    export let special = {
        coopertition: 0,
        ensemble: false,
        melody: false
    }

    $: {
        alliance.score = scores.speaker + scores.amp + scores.stage + scores.general;

        let melodyThreshold = special.coopertition ? 15 : 18
        special.melody = (notes.speaker + notes.amp) >= melodyThreshold
    }
    
    let speakerConfig: FieldElementConfig = {
        name: "Speaker",
        category:{
            Auto: [
                {
                    label: "Note",
                    value: 0,
                    increment: 5
                },
            ],
            Teleop: [
                {
                    label: "Note",
                    value: 0,
                    increment: 2
                },
                {
                    label: "Amplified Note",
                    value: 0,
                    increment: 5
                }
            ]
        }
    }

    let ampConfig: FieldElementConfig = {
        name: "Amp",
        category:{
            Auto: [
                {
                    label: "Note",
                    value: 0,
                    increment: 2
                },
            ],
            Teleop: [
                {
                    label: "Note",
                    value: 0,
                    increment: 1
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
                    increment: 2,
                    max: 3
                }
            ],
            Coopertition: [
                {
                    label: "Buttons pressed",
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
        <FieldElement config={speakerConfig} bind:score={scores.speaker} bind:count={notes.speaker}></FieldElement>
        <FieldElement config={ampConfig} bind:score={scores.amp} bind:count={notes.amp}></FieldElement>
        <Stage bind:score={scores.stage} radioColor={alliance.color} bind:ensemble={special.ensemble}></Stage>
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