
<script setup lang="ts">
    import { RouterView } from 'vue-router';

    import { PokemonBackground, Container } from '@shared/components';
</script>


<template>
    <PokemonBackground>
    <main class="md:p-4">
        <Container>
            <RouterView />
        </Container>
    </main>
    </PokemonBackground>
</template>
