
<script lang="ts" setup>
    import { onMounted } from 'vue';

    import { useTypeFilterStore } from '../../../state/typeFilter';
    import Selected from './Selected.vue';
    import Toolbar from './Toolbar.vue';
    import Input from './Input.vue';


    defineEmits<{
        (e: 'close-dialog'): void;
    }>();
    
    const store = useTypeFilterStore();
    
    onMounted(() => store.resetSelectedFilters());
</script>


<template>
<div>
    <h3 class="text-center text-xl sm:text-3xl font-bold">
        Filter by Pokémon Type
    </h3>

    <div class="h-6" />
    <Selected />

    <div class="h-6" />
    <Toolbar @close-dialog="$emit('close-dialog')" />

    <div class="h-6" />
    <Input />
</div>
</template>