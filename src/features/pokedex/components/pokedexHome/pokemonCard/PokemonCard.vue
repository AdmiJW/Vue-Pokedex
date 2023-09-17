
<script setup lang="ts">
    import { watch } from 'vue';
    import { useRouter } from 'vue-router';

    import Media from './Media.vue';
    import Title from './Title.vue';
    import Badges from './Badges.vue';

    import { fetchPokemonDetails } from '../../../services/getPokemonDetails';
    
    import type { NamedAPIResource } from '../../../types';
    

    const props = defineProps<{
        pokemon: NamedAPIResource;
    }>();

    const router = useRouter();

    const { data, isLoading, isError, error } = fetchPokemonDetails(props.pokemon.name);


    const onClick = ()=> router.push(`/pokemon/${props.pokemon.name}`);

    watch(error, (error) => error && console.error(error));

</script>


<template>
<q-card
    class="hover:scale-105 transition-transform cursor-pointer rounded-lg"
    tabindex="0"
    @click="onClick"
    bordered
>
<q-card-section 
    class="p-0"
>
    <Media
        :is-loading="isLoading"
        :is-error="isError"
        :pokemon="data"
    />

    <Title
        :is-loading="isLoading"
        :is-error="isError"
        :pokemon="data"
    />

    <Badges
        :is-loading="isLoading"
        :is-error="isError"
        :pokemon="data"
    />
</q-card-section>

</q-card>
</template>