<script lang="ts">
    export let score = 0;

    function addScore(addend: number) {
        score += addend;
    }
</script>

<div class="container">
    <h3>Amp</h3>
    <p>{score}</p>

    <p>Teleop</p>
    <button on:click={()=>addScore(1)}>+ Note</button>
    <p>Auto</p>
    <button on:click={()=>addScore(2)}>+ Note</button>
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

    button, p {
        width: 100%;
    }
</style>