
<script setup lang="ts">
    import Gallery from './Gallery.vue';
    import BasicInfo from './BasicInfo.vue';

    import type { Pokemon } from '../../../types';


    defineProps<{
        pokemon: Pokemon;
    }>();
</script>




<template>
<Transition appear>
    <div
        :key="pokemon.id"
        class="min-w-[225px] max-w-[350px] flex flex-col gap-5"
    >
        <Gallery
            :pokemon="pokemon"
        />
    
        <BasicInfo
            :pokemon="pokemon"
        />
    </div>
</Transition>
</template>



<style scoped>
    .v-enter-active {
        transition: transform .3s ease;
    }

    .v-enter-from,
    .v-leave-to {
        transform: scale(0);
    }
</style>