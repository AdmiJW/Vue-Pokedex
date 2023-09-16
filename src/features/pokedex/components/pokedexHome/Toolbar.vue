
<script setup lang="ts">
    import { useQuasar } from 'quasar';
    
    import { useSearchStore } from '../../state/search';
    import FilterDialog from './FilterDialog.vue';


    const $q = useQuasar();
    const store = useSearchStore();

    const onFilter = ()=> $q.dialog({
        component: FilterDialog,
    });

</script>




<template>
<div class="flex gap-2">
    <q-input 
        square 
        outlined
        dense
        clearable
        clear-icon="close"
        v-model="store.search"
        class="flex-grow"
        label="Search for a Pokémon" 
    />

    <q-btn 
        flat
        dense
        rounded
        class="text-red-600 p-2"
        icon="filter_list"
        @click="onFilter"
    />
</div>
</template>