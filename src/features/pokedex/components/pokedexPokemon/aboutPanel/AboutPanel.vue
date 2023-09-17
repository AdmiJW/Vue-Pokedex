
<script setup lang="ts">
    import { replaceDashesToSpace } from '@shared/utils';

    import type { Pokemon } from '../../../types';


    defineProps<{
        pokemon: Pokemon;
    }>();
</script>

<template>
<table class="text-sm lg:text-xl block">
    
    <h3 class="py-2 text-center text-3xl font-bold">
        About
    </h3>

    <tbody>
        <!-- Height -->
        <tr>
            <td>
                <q-icon name="height" />
            </td>
            <td class="font-bold">
                Height
            </td>
            <td>
                {{ pokemon.height / 10 }} metres
            </td>
        </tr>

        <!-- Weight -->
        <tr>
            <td>
                <q-icon name="monitor_weight" />
            </td>
            <td class="font-bold">
                Weight
            </td>
            <td>
                {{ pokemon.weight / 10 }} kg
            </td>
        </tr>

        <!-- Base Experience -->
        <tr>
            <td>
                <q-icon name="star" />
            </td>
            <td class="font-bold">
                Base Exp
            </td>
            <td>
                {{ pokemon.base_experience }}
            </td>
        </tr>

        <!-- Types -->
        <tr>
            <td>
                <q-icon name="layers" />
            </td>
            <td class="font-bold">
                Types
            </td>
            <td>
                <div class="flex gap-1 items-center flex-wrap">
                    <q-badge 
                        v-for="type in pokemon.types"
                        :key="type.type.name"
                        class="text-white px-2 py-1"
                        outline
                    >
                        {{ replaceDashesToSpace(type.type.name).toUpperCase() }}
                    </q-badge>
                </div>
            </td>
        </tr>

        <!-- Abilities -->
        <tr>
            <td>
                <q-icon name="flash_on" />
            </td>
            <td class="font-bold">
                Abilities
            </td>
            <td>
            <div class="flex gap-1 items-center flex-wrap">
                <q-badge 
                    v-for="ability in pokemon.abilities"
                    :key="ability.ability.name"
                    class="text-white px-2 py-1"
                    outline
                >
                    {{ replaceDashesToSpace(ability.ability.name).toUpperCase() }}
                </q-badge>
            </div>
            </td>
        </tr>
    </tbody>
</table>
</template>


<style scoped>
    td {
        padding: .5rem;
    }
</style>