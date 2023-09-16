
import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { UseQueryReturnType } from '@tanstack/vue-query';
import type { Ability } from '../types';



const BASE_QUERY_KEY = ['pokemon-by-ability'];
const BASE_URL = 'https://pokeapi.co/api/v2/ability/';



export function getFetchPokemonByAbilityOptions(name: string) {
    const queryKey = [...BASE_QUERY_KEY, name];
    const url = `${BASE_URL}${name}`;

    return {
        queryKey,
        queryFn: async ()=> {
            const { data } = await axios.get<Ability>(url);
            const pokemons = data.pokemon.map((pokemon)=> pokemon.pokemon);
            return pokemons;
        },
    };
}



export function fetchPokemonByAbility(
    name: string,
) {
    const options = getFetchPokemonByAbilityOptions(name);
    return useQuery(options);
}