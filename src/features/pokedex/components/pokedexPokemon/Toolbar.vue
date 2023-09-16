
<script setup lang="ts">
    import { useRouter } from 'vue-router';

    import { replaceDashesToSpace } from '@shared/utils';

    import type { Pokemon } from '../../types';


    defineProps<{
        pokemon: Pokemon;
    }>();

    const router = useRouter();

    const onBack = () => router.push('/');
</script>


<template>
    <div
        class="px-4 pb-3 flex items-center gap-1"
    >
        <!-- Back button -->
        <q-btn
            color='red'
            icon="arrow_back"
            round
            flat
            @click="onBack"
        >
            <q-tooltip>Back</q-tooltip>
        </q-btn>

        <!-- Breadcrumb -->
        <q-breadcrumbs
            class="p-2 shadow-inner bg-gray-50 flex-grow rounded-lg"
        >
            <q-breadcrumbs-el
                label="Pokédex"
                icon="layers"
                to="/"
                class="text-red-500"
            />
            <q-breadcrumbs-el
                :label="replaceDashesToSpace(pokemon.name).toUpperCase()"
                class="font-semibold text-red-500"
                icon="feed"
            >
            </q-breadcrumbs-el>
        </q-breadcrumbs>
    </div>
</template>