<script lang="ts">
	import Counter from "../components/Counter.svelte";
    import Alliance from "../components/Alliance.svelte";
	import type { AllianceInfo } from "$lib/types";
	import AllianceDetails from "../components/AllianceDetails.svelte";

    let allianceCount = 2;

    let alliances: AllianceInfo[] = [
        {
            name: "Red Alliance",
            color: "#c94e4e",
            score: 0
        },
        {
            name: "Blue Alliance",
            color: "#3d6cb9",
            score: 0
        }
    ];


    $: {
        if(allianceCount < 1) allianceCount = 1;

        while (alliances.length < allianceCount) {
            alliances = [
                ...alliances,
                {
                    name: `Alliance ${alliances.length + 1}`,
                    color: getRandomColor(),
                    score: 0
                }
            ];
        }

        while (alliances.length > allianceCount) {
            alliances = alliances.slice(0, -1);
        }
    }

    function getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

</script>

<main>
    <div class="controls">
        <div class="header">
            <a href="https://www.firstinspires.org/robotics/frc/game-and-season">
                <img class="logo" src="./crescendo.png" alt="Crescendo Logo">
            </a>
            <h4>Scoring Calculator</h4>
            <p>Created by <a href="https://github.com/murphy28">Ohlin Arellano</a></p>
            <p>From <a href="https://pairofdice.vegas/">Pair of Dice 7426</a></p>
        </div>
        <h2>Alliances</h2>
        <Counter label="Amount" max={6} bind:value={allianceCount} multiplier={0}></Counter>

        <div class="alliances">
            {#each alliances as alliance}
                <AllianceDetails bind:alliance></AllianceDetails>
            {/each}
        </div>
    </div>
    <div class="teams">
        {#each alliances as alliance}
            <Alliance color={alliance.color} teamName={alliance.name} bind:teamScore={alliance.score}></Alliance>
        {/each}
    </div>
    <div class="results">
        <div class="credits"></div>
        <Counter label="Alliances" max={6}  multiplier={0}></Counter>
    </div>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap:2rem;
        height: calc(100vh - 2rem);
        padding: 1rem;
        overflow:hidden;
    }

    .teams {
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: 100%;
        padding-right: 1rem;
        overflow-y:auto;
        overflow-x: hidden;
    }

    .controls, .results {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width:fit-content;
        height: 100%;
        overflow-y:auto;
        overflow-x: hidden;
        padding-right: 1rem;
    }

    .alliances {
        max-height: 60vh;
        overflow-y: scroll;
        padding-right: 1rem;
        margin-top: 1rem;
    }

    .header {
        width:100%;
        display: flex;
        align-items:center;
        flex-direction: column;
        margin: 2rem 0 2rem 0;
    }

    .logo {
        height:5rem;
    }

    .header h4 {
        font-size: 1.5rem;
        margin: 0.5rem 0 0 0;
    }

    .header p {
        font-size: 0.9rem;
        color:#cccccc;
        margin: 0.5rem 0 0 0;
    }

    @media only screen and (max-width: 1700px) {
        main {
            height:fit-content;
            flex-direction: column;
        }

        .controls, .results, .teams {
            max-width: 70rem;
            padding:1rem;
            width:100%;
        }

        .alliances {
            display: flex;
            max-height: unset;
            overflow-y:initial;
            padding: 0rem;
            width:100%;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
    }

    @media only screen and (max-width: 670px) {
        .alliances {
            display: initial;
        }
    }
</style>