
<script setup lang="ts">
    import { computed } from 'vue';

    import { getTypeStyling } from '../../../utils';

    import type { Pokemon } from '../../../types';

    
    const props = defineProps<{
        isLoading: boolean,
        isError: boolean,
        pokemon?: Pokemon,
    }>();

    const primaryType = computed(()=> getTypeStyling(props.pokemon?.types[0]?.type.name));
    const secondaryType = computed(()=> getTypeStyling(props.pokemon?.types[1]?.type.name));

</script>



<template>
<div class="pb-2 flex justify-center gap-1">
    
    <!-- Loading -->
    <template v-if="isLoading">
        <q-skeleton type="QBadge" class="h-6" />
        <q-skeleton type="QBadge" class="h-6" />
    </template>

    <!-- Error -->
    <p
        v-else-if="isError"
        class="text-center text-red-500"
    >
        Failed to load "{{ pokemon!.name }}"
    </p>

    <!-- Badges -->
    <template v-else>
        <q-badge
            v-if="pokemon?.types[0]"
            outline
            class="p-2"
            :style="`background-color: ${primaryType.color}`"
            :label="primaryType.label"
        />
        <q-badge
            v-if="pokemon?.types[1]"
            outline
            class="p-2"
            :style="`background-color: ${secondaryType.color}`"
            :label="secondaryType.label"
        />
    </template>

</div>
</template>