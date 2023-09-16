
import { computed } from 'vue';
import { useQueries } from '@tanstack/vue-query';

import { getFetchPokemonDetailsOptions } from './getPokemonDetails';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { QueryObserverResult } from '@tanstack/vue-query';



export function fetchMultiplePokemonDetails(
    pokemonNames: string[]
) {
    const queries = pokemonNames.map((name)=> getFetchPokemonDetailsOptions(name));

    return useQueries({
        queries: queries,
        combine: (queries)=> {
            const isPending = queries.some((query)=> query.isPending);
            const isError = queries.some((query)=> query.isError);
            const error = queries.find((query)=> query.isError)?.error;
            const data = queries.map((query)=> query.data);

            return {
                data,
                isPending,
                isError,
                error,
            }
        }
    });
}