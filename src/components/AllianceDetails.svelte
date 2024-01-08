<script lang="ts">
	import type { AllianceInfo } from "$lib/types";

    export let alliance: AllianceInfo;

</script>

<div class="details">
    <h4>{alliance.name.trim().length === 0 ? "New Alliance" : alliance.name}</h4>
    <div class="container">
        <span class="label">Name</span>
        <div class="input">
            <input type="text" bind:value={alliance.name} maxlength="16">
        </div>
    </div>
    
    <div class="container">
        <span class="label">Color</span>
        <div class="input color" style="--alliance-color:{alliance.color}">
            <input type="color" bind:value={alliance.color} maxlength="16">
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
        margin-bottom: 1rem;
    }

    .details {
        margin-bottom: 2rem;
    }

    .input {
        display: flex;
        width:fit-content;
        border: 1px solid;
        border-color: #393939;
        border-radius: 5px;
        overflow: hidden;   
        transition: border-color 0.25s ease;
        margin-left: 2rem;
    }

    .input:focus-within {
        border-color: #E4A234;
        transition: border-color 0.25s ease;
    }

    .label {
        color:#cccccc;
    }
    
    input[type=text] {
        font-family: 'IBM Plex Mono', monospace;
        background-color: #131313;
        padding: 0.5rem
    }

    input[type=color] {
        width:2rem;
        height: 2rem;
        opacity: 0;
    }

    .input.color {
        background-color: var(--alliance-color);
    }



    h4 {
        margin: 0 0 1rem 0;
    }
</style>