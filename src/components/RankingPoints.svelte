<script lang="ts">
	import { lowerColorBrightness } from "$lib/colors";
	import { rankingPoints } from "$lib/icons";
	import type { RankingPoints } from "$lib/types";

    export let points: RankingPoints;
    export let color: string = "#7fe5f7";

    let allRankingPointsAchieved: boolean = false

    $: {
        allRankingPointsAchieved = true;
        (Object.keys(points) as Array<keyof RankingPoints>).forEach(key => {
            if (points[key] < 1) allRankingPointsAchieved = false;
        });
    }
</script>

<div class="ranking-points {allRankingPointsAchieved ? 'complete' : ''}" style="--color:{color};--dark-color:{lowerColorBrightness(color)}">
    <span class="point{points.coopertition ? " active" : ""} " title="Coopertition">
        <svelte:component this={rankingPoints.coopertition} size={20} />
    </span>
    <span class="point{points.auto ? " active" : ""}" title="Auto">
        <svelte:component this={rankingPoints.auto} size={20} />
    </span>
    <span class="point{points.coral ? " active" : ""}" title="Coral">
        <svelte:component this={rankingPoints.coral} size={20} />
    </span>
    <span class="point{points.barge ? " active" : ""}" title="Barge">
        <svelte:component this={rankingPoints.barge} size={20} />
    </span>
</div>
<style>
    .ranking-points {
        display: flex;
        width:fit-content;
        border: 1px solid;
        border-color: #393939;
        border-radius: 5px;
        overflow: hidden;   
        transition: border-color 0.25s ease;
    }

    .ranking-points.complete {
        border-color: var(--color);
    }

    .point {
        background-color: #131313;
        transition: background-color 0.25s ease;
        width:2rem;
        height: 2rem;
        display:flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 2rem;
    }

    .active {
        background-color: var(--dark-color);
        color: var(--color);
    }
</style>