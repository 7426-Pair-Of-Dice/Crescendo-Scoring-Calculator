<script lang="ts">
	import Counter from "../components/Counter.svelte";
    import Alliance from "../components/Alliance.svelte";
	import type { AllianceInfo } from "$lib/types";
	import Leaderboard from "../components/Leaderboard.svelte";
	import Key from "../components/Key.svelte";

    let allianceCount = 2;

    let alliances: AllianceInfo[] = [
        {
            name: "Red Alliance",
            color: "#ff304f",
            score: 0
        },
        {
            name: "Blue Alliance",
            color: "#2f89fc",
            score: 0
        }
    ];


    $: {
        if(allianceCount < 1) allianceCount = 1;
        if(allianceCount > 30) allianceCount = 30;

        while (alliances.length < allianceCount) {
            alliances = [
                ...alliances,
                {
                    name: `${getRandomMember()} Alliance`,
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

    function getRandomMember() {
        let member: string[] = [
            "Otto",
            "Ohlin",
            "Anthony",
            "Aidan",
            "Aspen",
            "West",
            "Goblo",
            "Cohen",
            "Eli",
            "Brian",
            "Jo",
            "Annabelle",
            "Alex",
            "Vieira",
            "Miller",
            "Jackie",
            "Jonathan",
            "Stephen",
            "Zach",
            "Armando",
            "Marco",
            "Rose",
            "Skylar",
            "John",
            "Bechtler",
            "Myers",
            "Ollie"
        ]
        return member[Math.floor(Math.random() * member.length)];
    }

</script>

<svelte:head>
    <title>Crescendo Calculator</title>
</svelte:head>

<main>
    <div class="controls">
        <div class="header">
            <a href="https://www.firstinspires.org/robotics/frc/game-and-season">
                <img class="logo" src="./crescendo.png" alt="Crescendo Logo">
            </a>
            <h4>Scoring Calculator</h4>
            <p>Created by <a href="https://github.com/murphy28">Ohlin Arellano</a></p>
            <p>From <a href="https://pairofdice.vegas/">Pair of Dice 7426</a></p>

            <div class="links">
                <a href="https://github.com/7426-Pair-Of-Dice/Crescendo-Scoring-Calculator">Github</a>
                <a href="https://www.chiefdelphi.com/t/crescendo-web-scoring-calculator/448827">Chief Delphi</a>
            </div>
        </div>

        <h3>Stage Actions</h3>
        <div class="legend">
            <Key description="Robot has not interacted with stage.">X</Key>
            <Key description="Robot is parked on stage.">P</Key>
            <Key description="Robot has climbed onto left of stage.">L</Key>
            <Key description="Robot has climbed onto right of stage.">C</Key>
            <Key description="Robot has climbed onto center of stage.">R</Key>
        </div>
        <h3>Ranking Points</h3>
        <div class="legend">
            <Key title="Coopertition Bonus" description="Melody threshold set to 15.">🤝</Key>
            <Key title="Melody" description="18 or more notes scored." colored>🎵</Key>
            <Key title="Ensemble" description="2 robots onstage and 10 or more stage points." colored>🎶</Key>
        </div>

        <h3>Leaderboard</h3>
        <Leaderboard {alliances}></Leaderboard>
    </div>
    <div class="teams-wrapper">
        <Counter label="Alliances" max={30} bind:value={allianceCount} multiplier={0} title={true}></Counter>
        <br>
        <div class="teams">
            {#each alliances as alliance}
                <Alliance bind:alliance></Alliance>
            {/each}
        </div>
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
        padding-right: 1rem;
        overflow-y:auto;
        overflow-x: hidden;
    }

    .teams-wrapper, .teams {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        width:30%;
        height: 100%;
        overflow-y:auto;
        overflow-x: hidden;
        padding-right: 1rem;
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

    .links {
        margin: 0.5rem 0 0 0;
        display: flex;
        gap: 1rem;
    }

    .links * {
        color:#606060;
        font-size: 0.75rem;
    }

    @media only screen and (max-width: 1700px) {
        main {
            height:fit-content;
            flex-direction: column;
        }

        .controls, .teams {
            width:100%;
        }

        .controls {
            padding: 0;
        }
    }
</style>