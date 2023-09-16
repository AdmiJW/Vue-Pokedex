
import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { UseQueryReturnType } from '@tanstack/vue-query';
import type { NamedAPIResourceList } from '../types';


const BASE_QUERY_KEY = ['type-list'];
const BASE_URL = 'https://pokeapi.co/api/v2/type?limit=99999';



export function getFetchTypeListOptions() {
    return {
        queryKey: BASE_QUERY_KEY,
        queryFn: async ()=> {
            const { data } = await axios.get<NamedAPIResourceList>(BASE_URL);
            return data.results;
        },
    };
}


export function fetchTypeList() {
    const options = getFetchTypeListOptions();
    return useQuery(options);
}