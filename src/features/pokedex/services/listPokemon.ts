
import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { UseQueryReturnType } from '@tanstack/vue-query';
import type { NamedAPIResourceList } from '../types';


const BASE_QUERY_KEY = ['pokemon-list'];
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=99999';



export function getFetchPokemonListOptions() {
    return {
        queryKey: BASE_QUERY_KEY,
        queryFn: async ()=> {
            const { data } = await axios.get<NamedAPIResourceList>(BASE_URL);
            return data.results;
        },
    };
}


export function fetchPokemonList() {
    const options = getFetchPokemonListOptions();
    return useQuery(options);
}