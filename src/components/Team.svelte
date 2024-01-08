<script lang="ts">
	import Speaker from "../components/Speaker.svelte";
	import Amp from "./Amp.svelte";
	import Stage from "./Stage.svelte";

    export let teamName: string;

    let teamScore = 0;

    let speakerScore = 0;
    let ampScore = 0;
    let stageScore = 0;

    $: {
        teamScore = speakerScore + ampScore + stageScore;
    }
    

</script>

<div class="wrapper">
    <h1>{teamName} Score: {teamScore}</h1>
        <div class="container">
            <Speaker bind:score={speakerScore}></Speaker>
            <Amp bind:score={ampScore}></Amp>
            <Stage bind:score={stageScore}></Stage>
        </div>
    </div>

<style>
    .wrapper {
        display:flex;
        width: 100%;
        padding: 1rem;
        flex-direction: column;
    }

    .container {
        display:flex;
        flex-wrap: wrap;
        width: 100%;
        border: 1px #505050 solid;
        gap: 1rem;
    }
</style>