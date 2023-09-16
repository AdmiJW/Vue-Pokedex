
<script setup lang="ts">
    import Gallery from './Gallery.vue';
    import BasicInfo from './BasicInfo.vue';

    import type { Pokemon } from '../../../types';


    defineProps<{
        pokemon: Pokemon;
    }>();
</script>




<template>
<div
    class="min-w-[225px] max-w-[350px] flex flex-col gap-5"
>
    <Gallery
        :pokemon="pokemon"
    />

    <BasicInfo
        :pokemon="pokemon"
    />
</div>
</template>