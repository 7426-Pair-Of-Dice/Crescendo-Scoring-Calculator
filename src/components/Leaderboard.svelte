<script lang="ts">
	import type { AllianceInfo } from "$lib/types";

    export let alliances: AllianceInfo[];

    let sorted: AllianceInfo[] = [];

    $: {
        sorted = alliances.map(alliance => ({ ...alliance }));
        sorted.sort((a, b) => b.score - a.score);
    }

</script>

<div class="leaderboard">
    {#each sorted as alliance}
        <div class="row" style="--alliance-color:{alliance.color}">
            <h4>{alliance.name}</h4>
            <span class="score">{alliance.score}</span>
        </div>
    {/each}
</div>

<style>
    .leaderboard {
        display:flex;
        flex-direction: column;
        width:100%;
        justify-content: center;
        border-radius: 0.5rem;
        border: 1px #393939 solid;
        overflow:hidden;
        box-sizing: border-box;
    }

    .row {
        display: flex;
        width:100%;
        justify-content: space-between;
        align-items: center;
        background-color: var(--alliance-color);
        padding: 0.75rem;
        box-sizing: border-box;
    }

    h4, span {
        margin: 0
    }
    
    .score {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1rem;
    }
</style>