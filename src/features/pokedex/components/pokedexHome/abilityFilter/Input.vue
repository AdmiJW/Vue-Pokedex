
<script setup lang="ts">
    import { ref, watch, computed } from 'vue';

    import { replaceDashesToSpace } from '@shared/utils';
    import { Loading, Error } from '@shared/components';
    import { useAbilityFilterStore } from '../../../state/abilityFilter';
    import { fetchAbilityList } from '../../../services/listAbility';


    const search = ref('');
    const options = ref<string[]>([]);

    const store = useAbilityFilterStore();
    const { data, isLoading, isError, error } = fetchAbilityList();


    // Construct a map that maps the select element labels to the ability names
    const labelToAbilityMap = computed(() => {
        if (!data.value) return {};
        return data.value.reduce((acc, ability)=> {
            const label = replaceDashesToSpace(ability.name).toUpperCase();
            acc[label] = ability.name;
            return acc;
        }, {} as Record<string, string>);
    });

    // The options that are displayed in the select element when no search is performed
    const defaultOptions = computed(() => Object.keys(labelToAbilityMap.value));


    const filterFunction = (
        search: string, 
        update: ( callback: ()=> void )=> void
    ) => {
        if (search === '') {
            update(() => options.value = defaultOptions.value);
            return;
        }

        update(()=> {
            const searchRegex = new RegExp(search, 'i');
            options.value = defaultOptions.value.filter((label) => searchRegex.test(label));
        });
    }


    watch(isError, (isError)=> isError && console.error(error.value));

    watch(search, (searchValue)=> {
        if (!searchValue || !(searchValue in labelToAbilityMap.value) ) return;
        store.addFilter( labelToAbilityMap.value[searchValue] );
        search.value = '';
    });

</script>


<template>
<Loading v-if="isLoading" />
<Error v-else-if="isError" />
<div v-else>   
    <q-select
        filled
        use-input
        v-model="search"
        label="Find Abilities"
        input-debounce="0"
        @filter="filterFunction"
        :options="options"
    >
        <template v-slot:no-option>
        <q-item>
            <q-item-section class="text-grey">
                No such abilities found
            </q-item-section>
        </q-item>
        </template>
    </q-select>
</div>
</template>