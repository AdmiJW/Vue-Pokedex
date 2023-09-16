
<script setup lang="ts">
    import { usePaginationStore } from '../../state/pagination';

    
    const store = usePaginationStore();
</script>


<template>
<div class="flex justify-center mt-4">
    <q-pagination
        v-model="store.currentPage"
        :max="store.totalPages"
        max-pages="7"
        color="red-6"
        direction-links
    />
</div>
</template>