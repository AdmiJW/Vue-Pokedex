
import { defineStore } from "pinia";
import { ref, computed } from "vue";


const KEY = 'pagination';

export const usePaginationStore = defineStore(KEY, ()=> {
    
    const currentPage = ref(1);
    const pageSize = ref(20);
    const totalItems = ref(0);

    
    const totalPages = computed(()=> {
        return Math.ceil(totalItems.value / pageSize.value);
    });


    const setTotalItems = (n: number) => {
        totalItems.value = n;
        currentPage.value = 1;
    }

    return {
        currentPage,
        pageSize,
        totalItems,
        totalPages,

        setTotalItems,
    };
});