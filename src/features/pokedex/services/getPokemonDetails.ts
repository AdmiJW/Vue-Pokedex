
import { computed } from 'vue';
import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Ref } from 'vue';
import type { UseQueryReturnType } from '@tanstack/vue-query';
import type { Pokemon } from '../types';



const BASE_QUERY_KEY = ['pokemon-details'];
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';



export function getFetchPokemonDetailsOptions(name: string) {
    const queryKey = [...BASE_QUERY_KEY, name];
    const url = `${BASE_URL}${name}`;

    return {
        queryKey,
        queryFn: async ()=> {
            const { data } = await axios.get<Pokemon>(url);
            return data;
        },
    };
}


export function getFetchPokemonDetailsRefOptions(name: Ref<string>) {
    const queryKey = computed(()=> [...BASE_QUERY_KEY, name.value]);
    const url = computed(()=> `${BASE_URL}${name.value}`);

    return {
        queryKey,
        queryFn: async ()=> {
            const { data } = await axios.get<Pokemon>(url.value);
            return data;
        },
    };
}



export function fetchPokemonDetails(
    name: string,
) {
    const options = getFetchPokemonDetailsOptions(name);
    return useQuery(options);
}


export function fetchPokemonDetailsRef(
    name: Ref<string>,
) {
    const options = getFetchPokemonDetailsRefOptions(name);
    return useQuery(options);
}