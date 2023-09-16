
import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { UseQueryReturnType } from '@tanstack/vue-query';
import type { Type } from '../types';



const BASE_QUERY_KEY = ['pokemon-by-type'];
const BASE_URL = 'https://pokeapi.co/api/v2/type/';


export function getFetchPokemonByTypeOptions(name: string) {
    const queryKey = [...BASE_QUERY_KEY, name];
    const url = `${BASE_URL}${name}`;

    return {
        queryKey,
        queryFn: async ()=> {
            const { data } = await axios.get<Type>(url);
            const pokemons = data.pokemon.map((pokemon)=> pokemon.pokemon);
            return pokemons;
        },
    };
}



export function fetchPokemonByType(
    name: string,
) {
    const options = getFetchPokemonByTypeOptions(name);
    return useQuery(options);
}