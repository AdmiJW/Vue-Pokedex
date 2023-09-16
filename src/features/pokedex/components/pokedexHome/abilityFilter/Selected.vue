
<script setup lang="ts">
    import { replaceDashesToSpace } from '@shared/utils';
    import { useAbilityFilterStore } from '../../../state/abilityFilter';

    
    const store = useAbilityFilterStore();
</script>



<template>
<div
    class="bg-gray-100 rounded-lg p-3 shadow-inner"
>
    <p 
        v-if="store.selectedFilters.length === 0"
        class="text-center text-gray-400 font-semibold"
    >
        No filter applied.
    </p>

    <div
        v-else
        class="flex gap-2 justify-center"
    >
        <q-btn
            size="sm"
            color="grey-6"
            v-for="name in store.selectedFilters"
            :key="name"
            :label="replaceDashesToSpace(name).toUpperCase()"
            icon="close"
            @click="store.removeFilter(name)"
        />
    </div>
</div>
</template>