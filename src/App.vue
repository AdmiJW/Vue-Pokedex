
<script setup lang="ts">
    import { RouterView, useRoute } from 'vue-router';

    import { PokemonBackground, Container } from '@shared/components';

</script>


<template>
    <PokemonBackground>
    <main class="md:p-4">
        <Container>
        <RouterView v-slot="{ Component }">
            <Transition appear>
            <Component :is="Component" />
            </Transition>
        </RouterView>
        </Container>
    </main>
    </PokemonBackground>
</template>



<style scoped>
    .v-enter-active {
        transition: opacity .5s ease;
    }

    .v-enter-from {
        opacity: 0;
    }
</style>