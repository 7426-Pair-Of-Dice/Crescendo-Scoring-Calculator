<script lang="ts">
    export let label: string, increment: number = 1, decrement: number = increment, max:number | undefined = undefined, title:boolean = false;

    export let autoValue = 0;
    export let teleopValue = 0;

    let autoAdd = () => {autoValue += increment}
    let autoSubtract = () => {autoValue -= decrement}

    let teleopAdd = () => {teleopValue += increment}
    let teleopSubtract = () => {teleopValue -= decrement}

    $: {
        if(autoValue < 0) autoValue = 0;
        if(max && autoValue > max) autoValue = max;

        if(teleopValue < 0) teleopValue = 0;
        if(max && teleopValue > max) teleopValue = max;
    }

</script>
<div class="container">
    <span class="label {title ? "title" : ""}">{label}</span>
    <div class="counters">
        <div class="counter" title="Autonomous">
            <button on:click={()=>autoSubtract()}>-</button>
            <input type="number" bind:value={autoValue} min="0" max={max}>
            <button on:click={()=>autoAdd()}>+</button>
        </div>
        <div class="counter" title="Teleop">
            <button on:click={()=>teleopSubtract()}>-</button>
            <input type="number" bind:value={teleopValue} min="0" max={max}>
            <button on:click={()=>teleopAdd()}>+</button>
        </div>
    </div>
</div>

<style>
    .container * {
        border: unset;
        outline: unset
    }

    .container {
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        width:100%;
        padding: 0 0rem 0.5rem 0rem;
    }

    .counters {
        display: flex;
        gap: 0.5rem;
        margin-left: 2rem;
    }

    .counter {
        display: flex;
        width:fit-content;
        border: 1px solid;
        border-color: #393939;
        border-radius: 5px;
        overflow: hidden;   
        transition: border-color 0.25s ease;
    }

    .counter:focus-within {
        border-color: #E4A234;
        transition: border-color 0.25s ease;
    }

    .label {
        color:#cccccc;
    }

    .label.title {
        font-size: 1.5rem;
        font-weight: 600;
        color:#ffffff;
    }

    button {
        background-color: #393939;
        transition: background-color 0.25s ease;
    }

    button:hover {
        background-color: #606060;
        transition: background-color 0.25s ease;
    }
    
    button:active {
        background-color: #505050;
        transition: background-color 0.125s ease;
    }

    input {
        width:3rem;
        text-align: center;
        font-family: 'IBM Plex Mono', monospace;
        background-color: #131313;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
        appearance: textfield;
    }
</style>