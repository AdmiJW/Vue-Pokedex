
<script lang="ts" setup>
    import { useTypeFilterStore } from '../../../state/typeFilter';

    
    defineEmits<{
        (e: 'close-dialog'): void;
    }>();

    const store = useTypeFilterStore();
</script>


<template>
<div class="flex justify-end gap-2">
    <q-btn
        label="Close"
        color="grey-10"
        flat
        @click="$emit('close-dialog')"
    />

    <q-btn-group push>
        <q-btn
            :disabled="store.selectedFilters.length === 0"
            color="red"
            label="Clear"
            @click="store.clearSelectedFilters"
        />

        <q-btn
            :disabled="!store.isModified"
            color="warning"
            label="Reset"
            @click="store.resetSelectedFilters"
        />

        <q-btn 
            :disabled="!store.isModified"
            color="primary"
            label="Save"
            @click="store.saveSelectedFilters"
        />
    </q-btn-group>
</div>
</template>