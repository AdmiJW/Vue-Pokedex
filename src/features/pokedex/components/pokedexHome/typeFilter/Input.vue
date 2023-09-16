
<script setup lang="ts">
    import { watch } from 'vue';

    import { Loading, Error } from '@shared/components';
    import { getTypeStyling } from '../../../utils';
    import { useTypeFilterStore } from '../../../state/typeFilter';
    import { fetchTypeList } from '../../../services/listType';


    const store = useTypeFilterStore();
    const { data, isLoading, isError, error } = fetchTypeList();

    watch(isError, (isError) => isError && console.error(error.value));

    const onFilterClick = (name: string) => {
        store.toggleFilter(name);
    };
</script>


<template>
<Loading v-if="isLoading" />
<Error v-else-if="isError" />
<div 
    v-else
    class="grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-3"
>   
    <q-btn
        class="rounded-full text-white bg-gray-500 py-2"
        align="between"
        v-for="{ name } in data"
        :key="name"
        :style="{ backgroundColor: getTypeStyling(name).color  }"
        @click="onFilterClick(name)"
    >
        <img 
            v-if="getTypeStyling(name).logo"
            :src="getTypeStyling(name).logo!"
            class="w-8 h-8"
        />
        <q-icon 
            v-else
            name="question_mark"
            class="w-8 h-8"
        />

        <span class="text-lg">
            {{ name }}
        </span>

        <q-icon 
            :name="store.selectedFilters.includes(name) ? 'close' : 'add'" 
            size="sm" 
        />
    </q-btn>    

</div>
</template>