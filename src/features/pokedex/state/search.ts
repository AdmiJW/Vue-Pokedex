
import { defineStore } from "pinia";
import { ref } from "vue";


const KEY = 'search';

export const useSearchStore = defineStore(KEY, ()=> {
    const search = ref('');

    return {
        search,
    };
});