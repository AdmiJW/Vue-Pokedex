
import { defineStore } from "pinia";
import { ref, computed } from "vue";


const KEY = 'ability-filter';

export const useAbilityFilterStore = defineStore(KEY, ()=> {
    
    const appliedFilters = ref<string[]>([]);
    const selectedFilters = ref<string[]>([]);

    const isModified = computed(() => {
        return JSON.stringify(appliedFilters.value) !== JSON.stringify(selectedFilters.value);
    });


    const addFilter = (filter: string) => {
        if (!selectedFilters.value.includes(filter)) selectedFilters.value.push(filter);
    }

    const removeFilter = (filter: string) => {
        const index = selectedFilters.value.indexOf(filter);
        if (index !== -1) selectedFilters.value.splice(index, 1);
    }

    const clearSelectedFilters = () => {
        selectedFilters.value = [];
    }

    const resetSelectedFilters = () => {
        selectedFilters.value = [...appliedFilters.value];
    }

    const saveSelectedFilters = () => {
        appliedFilters.value = [...selectedFilters.value];
    }


    return {
        appliedFilters, 
        selectedFilters,
        isModified,

        addFilter,
        removeFilter,
        clearSelectedFilters,
        resetSelectedFilters,
        saveSelectedFilters,
    };
});