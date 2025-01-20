<script lang="ts">
	import type { ComponentType } from "svelte";
    import { type Icon } from 'lucide-svelte'; 

    export let description: string, title: string | boolean = false;

    export let icon: ComponentType<Icon>
</script>

<div class="container">
    <div class="key">
        <span class="point colored{title ? " large" : ""} ">
            <svelte:component this={icon} size={20} />
        </span>
    </div>
    <div class="info">
        {#if title}
            <h3>{title}</h3>
        {/if}
        <p>{description}</p>
    </div>
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 1rem;
        margin: 0.5rem 0 0.5rem 0;
    }

    .key {
        display: flex;
        justify-content: center;
        align-items: center;
        width:fit-content;
        min-width: 1.5rem;
        border: 1px solid;
        border-color: #393939;
        border-radius: 5px;
        overflow: hidden;   
        transition: border-color 0.25s ease;
    }

    .key span {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .colored {
        color: #7fe5f7;
    }

    .point {
        background-color: #032930;
        transition: background-color 0.25s ease;
        font-size: 1rem;
        min-width: 1.5rem;
        width:1.5rem;
        height: 1.5rem;
        text-align: center;
        line-height: 1.5rem;
    }

    .point.large {
        width:2rem;
        height: 2rem;
        line-height: 2rem;
    }

    .container p {
        font-size: 0.9rem;
        margin: 0;
    }

    .container h3 {
        font-size: 1rem;
        margin:0 0 0.25rem 0;
    }

    .info {
        max-width: 20rem;
    }

</style>