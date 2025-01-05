<script lang="ts">
	import Radio from "./Radio.svelte";

    export let score = 0, color: string = "#393939", radioColor: string | undefined = undefined, bargeRP = 0;

    let robots = [
        0,0,0
    ]

    $: {
        score = 0;
        robots.forEach((robot) => {
            switch(robot) {
                case 1:
                    score += 2;
                    break;
                case 2:
                    score += 6;
                    break;
                case 3:
                    score += 12;
                    break;
            }
        });

        if (score >= 14) bargeRP = 1;
        else bargeRP = 0;

    }

</script>

<div class="container" style="--border-color:{color}">
    <div class="header">
        <h3 class="label">Barge</h3>
        <h3 class="score">{score}</h3>
    </div>

    <div class="body">
        <Radio label="Robot 1" color={radioColor} bind:value={robots[0]}></Radio>
        <Radio label="Robot 2" color={radioColor} bind:value={robots[1]}></Radio>
        <Radio label="Robot 3" color={radioColor} bind:value={robots[2]}></Radio>
    </div>

</div>

<style>
    .container {
        border: 1px solid var(--border-color);
        border-radius: 0.5rem;
        margin: 1rem;
        padding: 1rem;
    }

    .body, .container {
        display: flex;
        flex-direction: column;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-bottom: 1rem;
    }

    .score {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 0.75rem;
        color:#aaaaaa
    }

    .header > * {
        margin: 0;
    }

    .container > * {
        margin: 0;
    }

    @media only screen and (max-width: 670px) {
        .container {
            width:100%;
        }
    }
</style>