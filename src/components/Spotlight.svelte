<script lang="ts">
    export let color: string = "#E4A234";

    export let spotlight = [
        false,false,false
    ];

    function toggle(mic: number) {
        spotlight[mic] = !spotlight[mic]
    }

</script>

<div class="container">
    <span class="label" title="Spotlight">Spotlight</span>
    <div class="radio" style="--alliance-color:{color}">
        <button title="Left Spotlight" class="{spotlight[0] ? "selected" : ""}" on:click={()=>toggle(0)}>L</button>
        <button title="Center Spotlight" class="{spotlight[1] ? "selected" : ""}" on:click={()=>toggle(1)}>C</button>
        <button title="Right Spotlight" class="{spotlight[2] ? "selected" : ""}" on:click={()=>toggle(2)}>R</button>
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