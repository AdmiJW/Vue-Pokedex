
<script setup lang="ts">

    import { computed } from 'vue';

    import { replaceDashesToSpace } from '@shared/utils';

    import type { Pokemon } from '../../../types';

    
    const props = defineProps<{
        pokemon: Pokemon;
    }>();

    const MAX = 255;

    const stats = computed(()=> props.pokemon.stats.map((stat)=> ({
        name: replaceDashesToSpace(stat.stat.name).toUpperCase(),
        value: stat.base_stat,
    })));

</script>

<template>
<table class="text-sm lg:text-xl block">

    <h3 class="py-2 text-center text-3xl font-bold">
        Base Stats
    </h3>

    <tbody class="flex-grow">

        <!-- Height -->
        <tr
            v-for="stat in stats"
            :key="stat.name"
        >
            <td class="!pr-1 font-bold text-right">
                {{ stat.name }}
            </td>
            <td class="w-full">
                <q-linear-progress
                    :value="stat.value / MAX"
                    size="10px"
                    color="white"
                    rounded
                />
            </td>
            <td class="!pl-0 text-lg font-light">
                {{ stat.value }}
            </td>
        </tr>
        
    </tbody>
</table>
</template>


<style scoped>
    td { 
        padding: .5rem .75rem; 
    }
</style>