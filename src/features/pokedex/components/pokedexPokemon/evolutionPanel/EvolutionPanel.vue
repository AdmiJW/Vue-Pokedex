
<script setup lang="ts">
    import { watch, computed, toRaw } from 'vue';

    import { fetchPokemonSpecies } from '../../../services/getPokemonSpecies';
    import { fetchEvolutionChainRef } from '../../../services/getEvolutionChain';
    import { flattenEvolutionChain } from '../../../utils';
    import EvolutionChain from './EvolutionChain.vue';

    import type { Pokemon } from '../../../types';


    const props = defineProps<{
        pokemon: Pokemon;
    }>();

    const { 
        data: speciesData, 
        isLoading: speciesIsLoading, 
        isError: speciesIsError,
        error: speciesError,
    } = fetchPokemonSpecies(props.pokemon.species.name);

    const evolutionChainLink = computed(() => speciesData.value?.evolution_chain.url);

    const {
        data: evolutionChainData,
        isLoading: evolutionChainIsLoading,
        isError: evolutionChainIsError,
        error: evolutionChainError,
    } = fetchEvolutionChainRef(evolutionChainLink);

    const flattenedEvolutionChain = computed(()=> {
        if (!evolutionChainData.value) return [];
        return flattenEvolutionChain(evolutionChainData.value.chain);
    });

    const isPending = computed(()=> speciesIsLoading.value || evolutionChainIsLoading.value);
    const isError = computed(()=> speciesIsError.value || evolutionChainIsError.value);
    const error = computed(()=> speciesError.value || evolutionChainError.value);

</script>



<template>
<div class="bg-red-500 rounded-md text-white">
    
    <h3 class="py-2 text-center text-3xl font-bold">
        Evolution Chain
    </h3>

    <!-- Loading -->
    <div
        v-if="isPending"
        class="flex justify-center items-center text-lg"
    >
        <q-spinner-puff
            color="white"
            size="lg"
        />
        <span class="ml-2">Loading...</span>
    </div>

    <!-- Error -->
    <div
        v-else-if="isError"
        class="flex justify-center items-center text-lg"
    >
        <q-icon
            name="error"
            color="white"
            size="lg"
        />
        <span class="ml-2">Error</span>
    </div>

    <!-- Content -->
    <div 
        v-else
        class="p-2 flex flex-col gap-2 text-black relative"
    >
        <EvolutionChain
            v-for="evolution in flattenedEvolutionChain"
            :key="evolution.toString()"
            :chain="evolution"
        />
    </div>

</div>
</template>