
<script setup lang="ts">
    import { onMounted } from 'vue';

    import CardContainer from './CardContainer.vue';
    import Pagination from './Pagination.vue';
    import Toolbar from './Toolbar.vue';


    onMounted(()=> document.title = 'Vue Pokédex');
</script>



<template>
<div class="p-4 pt-0">
    <Toolbar />
    <CardContainer />
    <Pagination />
</div>
</template>
