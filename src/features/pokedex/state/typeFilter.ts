
import { defineStore } from "pinia";
import { ref, computed } from "vue";


const KEY = 'type-filter';

export const useTypeFilterStore = defineStore(KEY, ()=> {

    const appliedFilters = ref<string[]>([]);
    const selectedFilters = ref<string[]>([]);

    const isModified = computed(() => {
        return JSON.stringify(appliedFilters.value) !== JSON.stringify(selectedFilters.value);
    });


    const toggleFilter = (filter: string) => {
        const index = selectedFilters.value.indexOf(filter);
        if (index === -1) selectedFilters.value.push(filter);
        else selectedFilters.value.splice(index, 1);
    }

    const resetSelectedFilters = () => {
        selectedFilters.value = [...appliedFilters.value];
    }

    const clearSelectedFilters = () => {
        selectedFilters.value = [];
    }

    const saveSelectedFilters = () => {
        appliedFilters.value = [...selectedFilters.value];
    }

    return { 
        appliedFilters, 
        selectedFilters,
        isModified,

        toggleFilter,
        clearSelectedFilters,
        resetSelectedFilters,
        saveSelectedFilters,
    };
});