<script lang="ts">
    import { onMount } from 'svelte';
    
    let gretting = "Buenos días";

    onMount(() => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if(currentHour < 12) {
            gretting = "Buenos días";
        } else if(currentHour < 18) {
            gretting = "Buenas tardes";
        } else {
            gretting = "Buenas noches";
        }
    });
</script>

<h1 class="text-3xl font-bold text-white">{gretting}</h1>