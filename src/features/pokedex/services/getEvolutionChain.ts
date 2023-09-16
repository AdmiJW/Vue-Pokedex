
import { computed } from 'vue';
import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { UseQueryReturnType } from '@tanstack/vue-query';
import type { Ref } from 'vue';
import type { EvolutionChain } from '../types';


const BASE_QUERY_KEY = ['evolution-chain'];



export function getFetchEvolutionChainOptions(
    url: Ref<string | undefined>,
) {
    const queryKey = [...BASE_QUERY_KEY, url];

    return {
        queryKey,
        queryFn: async ()=> {
            const { data } = await axios.get<EvolutionChain>(url.value!);
            return data;
        },
        enabled: computed(()=> !!url.value),
    };
}



export function fetchEvolutionChainRef(
    url: Ref<string | undefined>,
) {
    const options = getFetchEvolutionChainOptions(url);
    return useQuery(options);
}