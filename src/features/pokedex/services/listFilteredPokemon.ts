
import { computed } from 'vue';
import { useQueries } from '@tanstack/vue-query';

import { useAbilityFilterStore } from '../state/abilityFilter';
import { useTypeFilterStore } from '../state/typeFilter';
import { getFetchPokemonListOptions } from './listPokemon'; 
import { getFetchPokemonByAbilityOptions } from './listPokemonByAbility';
import { getFetchPokemonByTypeOptions } from './listPokemonByType';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { QueryObserverResult } from '@tanstack/vue-query';
import type { NamedAPIResource } from '../types';



export function fetchFilteredPokemons() {
    const abilityFilterStore = useAbilityFilterStore();
    const typeFilterStore = useTypeFilterStore();

    const queries = computed(()=> {
        const isNoFiltersApplied = (
            abilityFilterStore.appliedFilters.length == 0 &&
            typeFilterStore.appliedFilters.length == 0
        );
        if (isNoFiltersApplied) return [ getFetchPokemonListOptions() ];

        const abilityFilterQueries = abilityFilterStore
            .appliedFilters
            .map((ability)=> getFetchPokemonByAbilityOptions(ability));
        const typeFilterQueries = typeFilterStore
            .appliedFilters
            .map((type)=> getFetchPokemonByTypeOptions(type));

        const queries = [...abilityFilterQueries, ...typeFilterQueries];
        return queries;
    });

    return useQueries({
        queries: queries,
        combine: (queries)=> {
            const isPending = queries.some((query)=> query.isPending);
            const isError = queries.some((query)=> query.isError);
            const error = queries.find((query)=> query.isError)?.error;
            
            let data: NamedAPIResource[] = [];

            if (!isPending && !isError) {
                const counterMap = new Map<string, number>();
                const pokemonMap = new Map<string, NamedAPIResource>();

                queries.forEach((query)=> {
                    query.data!.forEach((pokemon)=> {
                        const count = counterMap.get(pokemon.name) ?? 0;
                        counterMap.set(pokemon.name, count + 1);
                        pokemonMap.set(pokemon.name, pokemon);
                    });
                });

                data = Array.from(counterMap)
                    .filter(([, count])=> count === queries.length)
                    .map(([name,])=> pokemonMap.get(name)!)
            }

            return {
                data,
                isPending,
                isError,
                error,
            }
        }
    })
}