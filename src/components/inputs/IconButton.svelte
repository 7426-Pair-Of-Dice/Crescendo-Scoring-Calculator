<script lang="ts">
	import type { ComponentType } from "svelte";
    import { type Icon } from 'lucide-svelte'; 

    export let icon: ComponentType<Icon>
    export let onClick: () => void
</script>

<button class="icon-button" on:click={onClick}>
    <svelte:component this={icon} size={20} />
</button>

<style>
    .icon-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid;
        border-color: #393939;
        border-radius: 5px;
        overflow: hidden;   
        background-color: #393939;
        transition: background-color 0.25s ease;
        padding: 0.25rem;
    }

    .icon-button:hover {
        background-color: #606060;
        transition: background-color 0.25s ease;
    }
    
    .icon-button:active {
        background-color: #505050;
        transition: background-color 0.125s ease;
    }

</style>