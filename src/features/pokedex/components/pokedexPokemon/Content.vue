
<script setup lang="ts">
    import { Overview } from './overview';
    import DetailedInfo from './DetailedInfo.vue';

    import type { Pokemon } from '../../types';

    
    defineProps<{
        pokemon: Pokemon;
    }>();
</script>


<template>
<div
    class="px-4 py-8 pt-1 flex justify-center gap-x-4 gap-y-10"
>
    <Overview
        :pokemon="pokemon"
    />

    <DetailedInfo
        :pokemon="pokemon"
    />
</div>
</template>