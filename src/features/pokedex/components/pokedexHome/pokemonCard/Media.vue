
<script setup lang="ts">
    import { computed } from 'vue';

    import { getTypeStyling, extractPokemonSprites } from '../../../utils';

    import type { Pokemon } from '../../../types';

    
    const props = defineProps<{
        isLoading: boolean,
        isError: boolean,
        pokemon?: Pokemon,
    }>();

    const primaryType = computed(()=> getTypeStyling(props.pokemon?.types[0]?.type.name));
    const images = computed(()=> {
        if (!props.pokemon) return [];
        return extractPokemonSprites(props.pokemon.sprites);
    });

</script>



<template>
    <!-- Loading -->
    <q-skeleton 
        v-if="isLoading"
        type="rect" 
        class="h-[160px]"
    />

    <!-- Error -->
    <div 
        v-else-if="isError"
        class="flex items-center justify-center h-[160px] bg-red-500"
    >
        <q-icon name="error" size="xl" color="white" />
    </div>

    <!-- Pokemon -->
    <div 
        v-else
        class="relative rounded-lg py-2"
        :style="`
            background: 
                linear-gradient( 180deg, ${primaryType.color} 0%, ${primaryType.color} 50%, rgba(1,1,1,.25) 100% ),
                linear-gradient( 180deg, ${primaryType.color} 0%, ${primaryType.color} 100% );
        `"
    >
        <!-- Faint ID -->
        <span
            class="
                absolute bottom-2 left-2 z-0
                text-5xl opacity-50 text-white font-extrabold
            "
        >
            #{{ pokemon!.id }}
        </span>

        <!-- Faint Logo -->
        <img
            v-if="primaryType.logo"
            :src="primaryType.logo"
            class="
                absolute top-0 right-0 z-0
                w-16 h-16 opacity-50
            "
        />

        <!-- Sprites -->
        <img
            v-if="images.length !== 0"
            :src="images[0]"
            :alt="`${pokemon!.name}'s' sprite`"
            class="relative m-auto h-[160px]"
        />
        <div
            v-else
            class="min-h-[160px] flex items-center justify-center"
        >
            <q-icon
                name="hide_image"
                color="white"
                size="2rem"
            />
        </div>
    </div>

</template>