
<script setup lang="ts">
    import { watch, computed } from 'vue';
    import { useRoute } from 'vue-router';

    import { replaceDashesToSpace } from '@shared/utils';
    import { Loading, Error } from '@shared/components';
    import { fetchPokemonDetailsRef } from '../../services/getPokemonDetails';
    import Toolbar from './Toolbar.vue';
    import Content from './Content.vue';
    


    const route = useRoute();
    const pokemonName = computed(()=> route.params.pokemon as string);

    const { data, isLoading, isError, error } = fetchPokemonDetailsRef(pokemonName);

    watch(error, (error) => error && console.error(error));
    
    watch(data, (newData) => {
        if (!newData) return;
        const pokemonName = replaceDashesToSpace(newData.name).toUpperCase();
        document.title = `${pokemonName} | Vue Pokedex`;
    }, { 
        immediate: true 
    });
</script>



<template>
    <Loading
        v-if="isLoading" 
    />
    <Error
        v-else-if="isError" 
    />
    <div v-else>
        <Toolbar
            :pokemon="data!"
        />

        <Content
            :pokemon="data!"
        />
    </div>
</template>