
<template>
<div 
    class="relative w-full min-h-screen"
>
    <div class="fixed inset-0 -z-0 brightness-[0.65] pokemon-bg" />
    <slot />
</div>
</template>


<style scoped>
.pokemon-bg {
    background-image: url('@assets/images/pokemon-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>