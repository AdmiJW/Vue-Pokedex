
<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue';


    const INITIAL_MESSAGE = 'Loading. Please wait.';

    const message = ref(INITIAL_MESSAGE);
    const interval = ref();

    onMounted(()=> {
        interval.value = setInterval(() => {
            message.value = message.value.endsWith('...') ? INITIAL_MESSAGE : `${message.value}.`;
        }, 500);
    });
    onUnmounted(() => clearInterval(interval.value));
</script>



<template>
<div 
    class="p-10 flex flex-col items-center gap-4"
>
    <img
        src="@assets/images/pikachu-running.gif"
        alt="Pikachu running loading animation"
        width="100"
    />

    <p class="text-center text-lg font-bold">
        {{ message }}
    </p>
</div>
</template>