
<script setup lang="ts">
    import { ref } from 'vue';
    
    import type { Pokemon } from '../../types';
    import { AboutPanel } from './aboutPanel';
    import { StatsPanel } from './statsPanel';
    import { EvolutionPanel } from './evolutionPanel';


    enum DetailTabs {
        ABOUT = 'ABOUT',
        STATS = 'STATS',
        EVOLUTION = 'EVOLUTION',
    }

    defineProps<{
        pokemon: Pokemon;
    }>();

    const tab = ref<string>(DetailTabs.ABOUT);
</script>


<template>
<div class="flex-1">
    <q-tabs
        v-model="tab" 
        active-class="text-white shadow-inner bg-red-500 rounded-t-md"
        content-class="text-red-500 text-sm sm:text-xl"
        indicator-color="red"
    >
        <q-tab :name="DetailTabs.ABOUT" class="py-3 flex-grow">
            About
        </q-tab>
        <q-tab :name="DetailTabs.STATS" class="flex-grow">
            Stats
        </q-tab>
        <q-tab :name="DetailTabs.EVOLUTION" class="flex-grow">
            Evolution
        </q-tab>
    </q-tabs>
    
    <div class="bg-red-500 p-3 rounded-b-md">
        <div class="rounded-md p-2 border-white border-[10px] text-white">
        <Transition appear>
            <AboutPanel
                v-if="tab === DetailTabs.ABOUT"
                :pokemon="pokemon"
            />
            <StatsPanel
                v-else-if="tab === DetailTabs.STATS"
                :pokemon="pokemon"
            />
            <EvolutionPanel
                v-else
                :pokemon="pokemon"
            />
        </Transition>
        </div>
    </div>
</div>
</template>



<style scoped>
    .v-enter-active {
        transition: transform .25s ease, opacity .5s ease;
        transform-origin: top;
    }

    .v-enter-from,
    .v-leave-to {
        transform: scaleY(0);
        opacity: 0;
    }
</style>