
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import { 
    PokedexHome,
    PokedexPokemon,
} from '@features/pokedex';


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: PokedexHome,
    },
    {
        path: '/pokemon/:pokemon',
        name: 'Pokemon',
        component: PokedexPokemon,
    }
];



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
