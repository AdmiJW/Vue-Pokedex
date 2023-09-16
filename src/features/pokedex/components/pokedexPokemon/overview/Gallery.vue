
<script setup lang="ts">
    import { ref, computed } from 'vue';
    
    import { getTypeStyling, extractPokemonSprites } from '../../../utils';

    import type { Pokemon } from '../../../types';


    
    const props = defineProps<{
        pokemon: Pokemon;
    }>();

    const slide = ref(0);

    const primaryType = computed(()=> getTypeStyling(props.pokemon.types[0].type.name));
    
    const images = computed(()=> extractPokemonSprites(props.pokemon.sprites));

</script>




<template>
<q-carousel
    v-model="slide"
    transition-prev="jump-right"
    transition-next="jump-left"
    control-color="white"
    prev-icon="chevron_left"
    next-icon="chevron_right"
    class="rounded-xl max-h-56"
    :style="`
        background:
            linear-gradient(180deg, ${primaryType.color} 0%, rgba(0,0,0,.25) 100%),
            linear-gradient(180deg, ${primaryType.color} 0%, ${primaryType.color} 100%);
    `"
    swipeable
    padding
    animated
    arrows
    infinite
>
    <!-- No images available -->
    <q-carousel-slide
        v-if="images.length === 0"
        :name="0"
        class="flex justify-center items-center text-white"
    >
        <q-icon
            name="hide_image"
            size="xl"
            class="w-40"
        />
    </q-carousel-slide>

    <!-- Images -->
    <q-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :name="index"
        class="flex justify-center items-center"
    >
        <img
            class="w-40"
            :src="image"
            :alt="pokemon.name"
        />
    </q-carousel-slide>
</q-carousel>
</template>