
<script lang="ts">
    import { ref } from 'vue';
    import { useDialogPluginComponent } from 'quasar';

    import { TypeFilter } from './typeFilter';
    import { AbilityFilter } from './abilityFilter';


    enum FilterBy {
        TYPE = 'type',
        ABILITY = 'ability',
    }


    export default {
        props: {},
        emits: [ ...useDialogPluginComponent.emits ],
        components: {
            TypeFilter,
            AbilityFilter,
        },
        setup() {
            const tab = ref(FilterBy.TYPE);

            return {
                ...useDialogPluginComponent(),
                FilterBy,
                tab,
            }
        },
    }
</script>


<template>
<q-dialog 
    ref="dialogRef" 
    @hide="onDialogHide"
>
<q-card 
    class="q-dialog-plugin w-full"
>

    <q-tabs 
        v-model="tab" 
        active-class="bg-red-500 text-white shadow-inner" 
        content-class="text-red-500 text-xl"
    >
        <q-tab :name="FilterBy.TYPE" class="py-3">
            Type
        </q-tab>
        <q-tab :name="FilterBy.ABILITY">
            Ability
        </q-tab>
    </q-tabs>

    <div class="p-6">
        <TypeFilter
            v-if="tab === FilterBy.TYPE" 
            @close-dialog="onDialogCancel" 
        />
        <AbilityFilter 
            v-if="tab === FilterBy.ABILITY" 
            @close-dialog="onDialogCancel"
        />
    </div>


</q-card>
</q-dialog>
</template>
