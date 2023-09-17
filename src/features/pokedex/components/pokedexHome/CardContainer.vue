
<script setup lang="ts">
    import { computed, watch } from 'vue';

    import { replaceDashesToSpace } from '@shared/utils';
    import { Error, Loading } from '@shared/components';
    import { fetchFilteredPokemons } from '../../services/listFilteredPokemon';
    import { useSearchStore } from '../../state/search';
    import { usePaginationStore } from '../../state/pagination';
    import { PokemonCard } from './pokemonCard';


    const filteredPokemons = fetchFilteredPokemons();
    const searchStore = useSearchStore();
    const paginationStore = usePaginationStore();


    // Filter the pokemons based on the search term
    const pokemons = computed(()=> {
        const data = filteredPokemons.value.data;
        if (!searchStore.search) return data;
        const regex = new RegExp(searchStore.search, 'i');
        return data.filter((pokemon)=> replaceDashesToSpace(pokemon.name).match(regex));
    });


    const currentPagePokemons = computed(()=> {
        const start = (paginationStore.currentPage - 1) * paginationStore.pageSize;
        const end = start + paginationStore.pageSize;
        return pokemons.value.slice(start, end);
    });


    // Update the pagination store when the list of pokemons change
    watch(pokemons, (newPokemons) => {
        paginationStore.setTotalItems(newPokemons.length);
    });

</script>



<template>
<Loading v-if="filteredPokemons.isPending" />
<Error v-else-if="filteredPokemons.isError" />
<div 
    v-else
    class="py-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4"
>
    <TransitionGroup appear>
        <PokemonCard 
            v-for="pokemon in currentPagePokemons"
            :key="pokemon.name"
            :pokemon="pokemon"
        />
    </TransitionGroup>
</div>
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