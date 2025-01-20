<script lang="ts">
	import Counter from "../components/Counter.svelte";
    import Alliance from "../components/Alliance.svelte";
	import type { AllianceInfo } from "$lib/types";
	import Leaderboard from "../components/Leaderboard.svelte";
	import Key from "../components/Key.svelte";
	import { alliancesToCSV, csvToAlliances, generateFilename, getRandomMember } from "$lib";
	import IconButton from "../components/inputs/IconButton.svelte";
	import { ArrowDownToLine, FolderOpen, ListRestart } from "lucide-svelte";
	import { createAlliance } from "$lib/alliance";
    import { selectFile, downloadStringToFile } from "$lib/file";
	import Legend from "../components/Legend.svelte";
	import { rankingPoints } from "$lib/icons";
	import { getRandomColor } from "$lib/colors";
	import { loadAlliances, saveAlliances } from "$lib/storage";

    let allianceCount: number

    let alliances: AllianceInfo[]

    let storedAlliances: AllianceInfo[] = loadAlliances()

    if(storedAlliances.length > 0) {
        allianceCount = storedAlliances.length
        alliances = storedAlliances
    } else resetAlliances()


    $: {
        if(allianceCount < 1) allianceCount = 1;

        while (alliances.length < allianceCount) {
            alliances = [
                ...alliances,
                createAlliance(`${getRandomMember()} Alliance`, getRandomColor())
            ];
        }

        while (alliances.length > allianceCount) {
            alliances = alliances.slice(0, -1);
        }

        saveAlliances(alliances)
    }

    function resetAlliances() {
        allianceCount = 2

        alliances = [
            createAlliance("Red Alliance", "#ff304f"),
            createAlliance("Blue Alliance", "#2f89fc")
        ]
    }

    function exportAlliances() {
        downloadStringToFile(
            generateFilename(".reefscape.csv"),
            alliancesToCSV(alliances),
            "text/csv"
        )
    }

    function importAlliances() {
        selectFile(".reefscape.csv", csv => {
            let newAlliances = csvToAlliances(csv)
            allianceCount = newAlliances.length;
            alliances = newAlliances;
        });
    }

</script>

<svelte:head>
    <title>Reefscape Calculator</title>
</svelte:head>

<main>
    <div class="controls">
        <div class="header">
            <a href="https://www.firstinspires.org/robotics/frc/game-and-season">
                <img class="logo" src="./reefscape.png" alt="Reefscape Logo">
            </a>
            <h4>Scoring Calculator</h4>
            <p>Created by <a href="https://github.com/murphy28">Ohlin Arellano</a></p>
            <p>From <a href="https://pairofdice.vegas/">Pair of Dice 7426</a></p>

            <div class="links">
                <a href="https://github.com/7426-Pair-Of-Dice/FRC-Scoring-Calculator">Github</a>
                <a href="https://www.chiefdelphi.com/t/reefscape-web-scoring-calculator/478718">Chief Delphi</a>
            </div>
        </div>

        <h3>Barge Actions</h3>
        <div class="legend">
            <Key description="Robot has not interacted with barge.">X</Key>
            <Key description="Robot is parked in the barge zone.">P</Key>
            <Key description="Robot is off-the-ground via shallow cage.">S</Key>
            <Key description="Robot is off-the-ground via deep cage.">D</Key>
        </div>

        <h3>Ranking Points</h3>
        <div class="legend">
            <Legend title="Coopertition Bonus" description="At least 2 algae scored in each processor" icon={rankingPoints.coopertition}></Legend>
            <Legend title="Auto" description="All robots leave and score 1 or more coral in auto" icon={rankingPoints.auto}></Legend>
            <Legend title="Coral" description="If at least 5 coral scored on each level. If co-op bonus, at least 5 coral scored on at least 3 levels" icon={rankingPoints.coral}></Legend>
            <Legend title="Barge" description="At least 14 barge points scored" icon={rankingPoints.barge}></Legend>
        </div>

        <h3>Leaderboard</h3>
        <Leaderboard {alliances}></Leaderboard>
    </div>
    <div class="teams-wrapper">
        <div class="alliance-options">
            <div class="section">
                <IconButton icon={ListRestart} onClick={resetAlliances}></IconButton>
                <IconButton icon={FolderOpen} onClick={importAlliances}></IconButton>
                <IconButton icon={ArrowDownToLine} onClick={exportAlliances}></IconButton>
            </div>
            <div class="section">
                <Counter label="Alliance Count" bind:value={allianceCount} multiplier={0} padding={false}></Counter>
            </div>
        </div>
        <br>
        <div class="teams">
            {#each alliances as alliance}
                <Alliance bind:alliance></Alliance>
            {/each}
        </div>
    </div>
</main>

<style>
    .alliance-options {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .section {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

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
        max-width: 15rem;
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