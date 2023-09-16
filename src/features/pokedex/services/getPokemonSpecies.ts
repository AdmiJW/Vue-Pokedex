
import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { UseQueryReturnType } from '@tanstack/vue-query';
import type { PokemonSpecies } from '../types';



const BASE_QUERY_KEY = ['pokemon-species'];
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon-species/';



export function getFetchPokemonSpeciesOptions(name: string) {
    const queryKey = [...BASE_QUERY_KEY, name];
    const url = `${BASE_URL}${name}`;

    return {
        queryKey,
        queryFn: async ()=> {
            const { data } = await axios.get<PokemonSpecies>(url);
            return data;
        },
    };
}



export function fetchPokemonSpecies(
    name: string,
) {
    const options = getFetchPokemonSpeciesOptions(name);
    return useQuery(options);
}