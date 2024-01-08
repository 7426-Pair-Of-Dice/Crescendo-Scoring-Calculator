<script lang="ts">
	import type { FieldElementConfig } from "$lib/types";
	import FieldElement from "./FieldElement.svelte";

    export let teamName: string, color: string = "#393939";

    export let teamScore = 0;

    let speakerScore = 0;
    let ampScore = 0;
    let stageScore = 0;
    let generalScore = 0;

    $: {
        teamScore = speakerScore + ampScore + stageScore + generalScore;
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

    let stageConfig: FieldElementConfig = {
        name: "Stage",
        category:{
            Teleop: [
                {
                    label: "Park",
                    value: 0,
                    increment: 1,
                    max: 3
                },
                {
                    label: "Onstage",
                    value: 0,
                    increment: 3,
                    max: 3
                },
                {
                    label: "Note in Trap",
                    value: 0,
                    increment: 5,
                    max: 3
                }
            ],
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
        }
    }
</script>

<div class="wrapper">
    <div class="header">
        <h2>{teamName.trim().length === 0 ? "New Alliance" : teamName}</h2>
        <h2 class="score">Score: {teamScore}</h2>
    </div>
    <div class="container" style="--border-color:{color}">
        <FieldElement config={speakerConfig} bind:score={speakerScore}></FieldElement>
        <FieldElement config={ampConfig} bind:score={ampScore}></FieldElement>
        <FieldElement config={stageConfig} bind:score={stageScore}></FieldElement>
        <FieldElement config={general} bind:score={generalScore}></FieldElement>
    </div>
</div>

<style>
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
    }

</style>