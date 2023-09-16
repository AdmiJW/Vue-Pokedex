
<script setup lang="ts">
    import { replaceDashesToSpace } from '@shared/utils';

    import type { Pokemon } from '../../../types';

    
    const { isLoading, isError, pokemon } = defineProps<{
        isLoading: boolean,
        isError: boolean,
        pokemon?: Pokemon,
    }>();
    
</script>



<template>
    <!-- Loading -->
    <q-skeleton 
        v-if="isLoading"
        type="text" 
        class="mx-8 h-12"
    />

    <!-- Error -->
    <p 
        v-else-if="isError"
        class="py-2 text-center text-2xl font-bold text-red-500"
    >
        Error
    </p>

    <!-- Title -->
    <p 
        v-else
        class="p-2 text-center text-2xl font-bold"
    >
        {{ replaceDashesToSpace(pokemon!.name).toUpperCase() }}
    </p>
    
</template>