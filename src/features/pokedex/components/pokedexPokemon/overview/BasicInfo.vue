
<script setup lang="ts">
    import { computed } from 'vue';

    import { replaceDashesToSpace } from '@shared/utils';
    import { getTypeStyling } from '../../../utils';

    import type { Pokemon } from '../../../types';



    const props = defineProps<{
        pokemon: Pokemon;
    }>();

    const primaryType = computed(()=> getTypeStyling(props.pokemon.types[0].type.name));
    const secondaryType = computed(()=> getTypeStyling(props.pokemon.types[1]?.type.name));
</script>


<template>
<div
    class="flex flex-col justify-center items-center"
>
    <h5 class="text-xl md:text-2xl font-extrabold text-gray-400">
        #{{ pokemon.id }}
    </h5>

    <h1 
        class="text-3xl md:text-5xl font-extrabold pb-5 text-center"
        :style="`color: ${primaryType.color}`"
    >
        {{ replaceDashesToSpace(pokemon.name).toUpperCase() }}
    </h1>

    <div class="flex gap-2">
        <div v-if="primaryType.logo">
            <img
                :src="primaryType.logo"
                :alt="primaryType.label"
                class="w-12 h-12"
            />
            <q-tooltip
                :style="`background-color: ${primaryType.color}`"
            >
                {{ primaryType.label }}
            </q-tooltip>
        </div>
        <div v-if="secondaryType.logo">
            <img
                :src="secondaryType.logo"
                :alt="pokemon.types[1]?.type.name"
                class="w-12 h-12"
            />
            <q-tooltip
                :style="`background-color: ${secondaryType.color}`"
            >
                {{ secondaryType.label }}
            </q-tooltip>
        </div>
    </div>

</div>
</template>