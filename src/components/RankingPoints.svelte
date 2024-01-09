<script lang="ts">
    export let points: any;
</script>

<div class="container">
    <span class="label"></span>
    <div class="counter">
        <span class="point{points.coopertition ? " active" : ""} " title="Coopertition">🤝</span>
        <span class="point{points.melody ? " active" : ""} color" title="Melody">🎵</span>
        <span class="point{points.ensemble ? " active" : ""} color" title="Ensemble">🎶</span>
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
    }

    .counter {
        display: flex;
        width:fit-content;
        border: 1px solid;
        border-color: #393939;
        border-radius: 5px;
        overflow: hidden;   
        transition: border-color 0.25s ease;
        margin-left: 2rem;
    }

    .label {
        color:#cccccc;
    }

    .color {
        color: transparent;  
        text-shadow: 0 0 0 #00d586;
    }

    .point {
        background-color: #131313;
        transition: background-color 0.25s ease;
        width:2rem;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
    }

    .active {
        background-color: #0a5335;
    }
</style>