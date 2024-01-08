<script lang="ts">
	import Counter from "./Counter.svelte";

    export let score = 0;
    export let config = {
        name: "Amp",
        teleop: [
            {
                label: "Note",
                value: 0,
                increment: 1
            }
        ],
        auto: [
            {
                label: "Note",
                value: 0,
                increment: 2
            },
        ],
    };

    $: {
        let temp = 0;
        [...config.teleop, ...config.auto].forEach((e)=>{
            temp += e.value * e.increment
        })

        score = temp;
    }
</script>

<div class="container">
    <h3>{config.name}</h3>
    <p>{score}</p>

    <p>Teleop</p>
    {#each config.teleop as method}
        <Counter label={method.label} bind:value={method.value}></Counter>
        <!-- <button on:click={()=>addScore(method.increment)}>{method.label}</button> -->
    {/each}
    <p>Auto</p>
    {#each config.auto as method}
        <Counter label={method.label} bind:value={method.value}></Counter>
    {/each}
</div>

<style>
    .container {
        display: flex;
        width: 10rem;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #571d6e;
        margin: 1rem;
        padding: 1rem;
    }

    .container > * {
        margin: 0;
    }

    p {
        width: 100%;
    }
</style>