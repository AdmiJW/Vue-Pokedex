
<template>
<div 
    class="
        container max-w-7xl m-auto mt-[100px] relative 
        bg-[rgba(255,255,255,.85)] backdrop-blur-sm rounded-2xl
    "
>
    <!-- Pokemon logo -->
    <img 
        class="
            m-auto absolute inset-x-0 
            w-[200px] top-[-65px] sm:w-[300px] sm:top-[-100px]
        "
        src="@assets/images/logo.png"
        alt="Pokemon logo"
    />

    <!-- Pokedex Title -->
    <h3 
        class="py-10 mb-0 text-center text-4xl font-semibold rounded-t-2xl bg-red-600 text-white"
    >
        Pokédex

        <p
            class="text-sm font-light opacity-70"
        >
            By <a class="font-bold" href="https://github.com/AdmiJW/Vue-Pokedex" target="_blank">AdmiJW</a>
        </p>
    </h3>

    <!-- Pokeball Middle Decoration -->
    <div 
        class="bg-black mb-10 relative"
        style="height: 20px;"
    >
        <div 
            class="
                absolute inset-0 m-auto bg-white rounded-full w-[75px] h-[75px]
                border-solid border-black border-[20px] 
            "
        />
    </div>

    <slot />
    
</div>
</template>
