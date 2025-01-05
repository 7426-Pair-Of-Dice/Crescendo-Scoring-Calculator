<script lang="ts">
    export let description: string, title: string | boolean = false, colored: boolean = false;
</script>

<div class="container">
    <div class="key">
        <span class="point{colored ? " colored" : ""}{title ? " large" : ""} "><slot></slot></span>
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
        width:fit-content;
        min-width: 1.5rem;
        border: 1px solid;
        border-color: #393939;
        border-radius: 5px;
        overflow: hidden;   
        transition: border-color 0.25s ease;
    }

    .colored {
        color: transparent;  
        text-shadow: 0 0 0 #7fe5f7;
    }

    .point {
        background-color: #393939;
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