<script lang="ts">
    export let label: string, title:boolean = false, color: string = "#E4A234";

    export let value = 0;

    function setEnd(state: number) {
        value = state
    }

    $: {
        if(value < 0) value = 0;
    }

</script>

<div class="container">
    <span class="label {title ? "title" : ""}" title="{label}">{label}</span>
    <div class="radio" style="--alliance-color:{color}">
        <button title="Not interacting with barge" class="{value == 0 ? "selected" : ""}" on:click={()=>setEnd(0)}>X</button>
        <button title="Parked" class="{value == 1 ? "selected" : ""}" on:click={()=>setEnd(1)}>P</button>
        <button title="Shallow Cage Hang" class="{value == 2 ? "selected" : ""}" on:click={()=>setEnd(2)}>S</button>
        <button title="Deep Cage Hang" class="{value == 3 ? "selected" : ""}" on:click={()=>setEnd(3)}>D</button>
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

    .radio {
        display: flex;
        gap:0.25rem;
        width:fit-content;
        overflow: hidden;   
        margin-left: 2rem;
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
        border: 1px solid;
        border-color: #393939;
        border-radius: 5px;
        padding: 0.5rem;
        width:2rem;
        height:2rem;
        transition: border-color 0.25s ease;
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

    .selected {
        border-color: var(--alliance-color);
        background-color: var(--alliance-color);
        transition: border-color 0.25s ease;
    }
    
    .selected:hover {
        border-color: var(--alliance-color);
        background-color: var(--alliance-color);
        transition: border-color 0.25s ease;
    }
</style>