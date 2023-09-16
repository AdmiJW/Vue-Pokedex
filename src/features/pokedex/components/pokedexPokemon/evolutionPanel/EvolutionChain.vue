
<script setup lang="ts">
    import { watch, toRaw } from 'vue';
    import { useRouter } from 'vue-router';

    import { replaceDashesToSpace } from '@shared/utils';
    import { fetchMultiplePokemonDetails } from '../../../services/getMultiplePokemonDetails';
    import { extractPokemonSprites } from '../../../utils';


    const props = defineProps<{
        chain: string[]
    }>();

    const router = useRouter();
    const query = fetchMultiplePokemonDetails(props.chain);

    const onClickedPokemon = (pokemonName: string) => {
        router.push(`/pokemon/${pokemonName}`);
    };

</script>



<template>
<div class="p-1 bg-white rounded-md">

    <!-- Loading -->
    <div
        v-if="query.isPending"
        class="flex justify-center items-center"
    >
        <q-spinner-puff
            color="red"
            size="sm"
        />
        <span class="ml-2 text-red-500">Loading...</span>
    </div>

    <!-- Error -->
    <div
        v-else-if="query.isError"
        class="flex justify-center items-center"
    >
        <q-icon
            name="error"
            color="red"
            size="sm"
        />
        <span class="ml-2 text-red-500">Error</span>
    </div>


    <div
        v-else
        class="flex justify-center gap-3"
    >
        <q-card
            v-for="pokemon in query.data"
            :key="pokemon!.id"
            tabindex="0"
            class="cursor-pointer"
            flat
            @click="onClickedPokemon(pokemon!.name)"
        >
        <q-card-section 
            class="p-1 flex flex-col items-center"
        >
            <img
                v-if="extractPokemonSprites(pokemon!.sprites).length"
                :src="extractPokemonSprites(pokemon!.sprites)[0]"
                :alt="pokemon!.name"
                class="w-20"
            />
            <q-icon
                v-else
                name="image_not_supported"
                size="3rem"
                class="text-gray-500"
            />


            <span class="text-sm font-bold text-gray-400">
                #{{ pokemon!.id }}
            </span>

            <span class="text-xl font-bold">
                {{ replaceDashesToSpace(pokemon!.name).toUpperCase() }}
            </span>
        </q-card-section>
        </q-card>
    </div>
</div>
</template>