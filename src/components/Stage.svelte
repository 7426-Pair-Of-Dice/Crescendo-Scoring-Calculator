<script lang="ts">
	import Counter from "./Counter.svelte";
	import Radio from "./Radio.svelte";
	import Spotlight from "./Spotlight.svelte";

    export let score = 0, color: string = "#393939", radioColor: string | undefined = undefined;

    let robots = [
        0,0,0
    ]

    let spotlight = [
        false,false,false
    ]

    function getOccurrences(array: number[], value: number) {
        let occurrences = 0;
        array.forEach((e)=>{
            if(e == value) occurrences += 1;
        })
        return occurrences;
    }

    export let ensemble = false;

    let traps = 0;

    $:{
        let temp = 0
        for(let i = 0; i < 3; i++) {
            switch(robots[i]) {
                case 1:
                    temp += 1
                    break;
                case 2:
                case 3:
                case 4:
                    if(spotlight[robots[i] - 2]) temp += 4
                    else temp += 3
            }
        }

        temp += Math.max((getOccurrences(robots, 2) - 1) * 2, 0)
        temp += Math.max((getOccurrences(robots, 3) - 1) * 2, 0)
        temp += Math.max((getOccurrences(robots, 4) - 1) * 2, 0)

        temp += traps * 5;
        score = temp;
        
        ensemble = (score >= 10 && (getOccurrences(robots, 2) + getOccurrences(robots, 3) + getOccurrences(robots, 4)) >= 2)

        console.log("ensemble: ", ensemble)
        console.log("Score: ",score >= 10, ", Onstage: ", (getOccurrences(robots, 2) + getOccurrences(robots, 3) + getOccurrences(robots, 4)) >= 2)
        
    }

</script>

<div class="container" style="--border-color:{color}">
    <div class="header">
        <h3 class="label">Stage</h3>
        <h3 class="score">{score}</h3>
    </div>

    <div class="body">
        <Counter label="Notes in Traps" max={3} multiplier={5} bind:value={traps} ></Counter>
        <Radio label="Robot 1" color={radioColor} bind:value={robots[0]}></Radio>
        <Radio label="Robot 2" color={radioColor} bind:value={robots[1]}></Radio>
        <Radio label="Robot 3" color={radioColor} bind:value={robots[2]}></Radio>
        <Spotlight color={radioColor} bind:spotlight></Spotlight>
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

    span {
        width: 100%;
        padding-bottom: 0.5rem;
        font-weight: 600;
        color:#606060;
    }

    span:not(:first-of-type) {
        padding-top: 1rem;
    }

    @media only screen and (max-width: 670px) {
        .container {
            width:100%;
        }
    }
</style>