
<script setup lang="ts">
    import { getTypeStyling } from '../../../utils';
    import { useTypeFilterStore } from '../../../state/typeFilter';

    
    const store = useTypeFilterStore();
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
        class="flex gap-1 justify-center"
    >   
        <TransitionGroup appear>
            <q-badge
                v-for="name in store.selectedFilters"
                :key="name"
                class="text-white uppercase bg-gray-500 px-2 py-1"
                :style="{ backgroundColor: getTypeStyling(name).color }"
            >
                {{ name.toUpperCase() }}
            </q-badge>
        </TransitionGroup>
    </div>
</div>
</template>



<style scoped>
    .v-enter-active {
        transition: transform .25s ease;
    }

    .v-enter-from,
    .v-leave-to {
        transform: scale(0);
    }
</style>