
import { 
    replaceDashesToSpace,
    flattenObjectValuesToArray,
} from '@shared/utils';
import { typeStylings } from '../data';

import type { TypeStyling, ChainLink, PokemonSprites } from '../types';



/**
 * 
 * @param type 
 */
export function getTypeStyling(
    type: string | undefined
): TypeStyling {

    // The default styling for unknown types is gray.
    if (!type || !typeStylings[type]) return {
        label: type === '' || type === undefined ? 'UNKNOWN' : replaceDashesToSpace(type).toUpperCase(),
        color: 'gray', 
        logo: null,
    };

    return typeStylings[type];
}



/**
 * Returns the evolution chain of a pokemon in the form of an array of pokemon names.
 * The format of the evolution chain is as follows:
 * [
 *      [A, B, C],
 *      [A, D, E],
 *      ...
 * ]
 */
export function flattenEvolutionChain(
    chain: ChainLink
): string[][] {

    const result = [];

    for (const child of chain.evolves_to) {
        const res = flattenEvolutionChain(child);
        res.forEach(r => result.push([ chain.species.name, ...r ]));
    }

    if (result.length === 0) result.push([chain.species.name]);
    return result;
}



/**
 * Returns the pokemon's sprites in an array.
 * The sprites are sorted so that any sprites that contain 'back' take the least priority.
 */
export function extractPokemonSprites(
    sprites: PokemonSprites
): string[] {
    const result: string[] = flattenObjectValuesToArray(sprites);
    result.sort((a, b) => {
        if (a.includes('back')) return 1;
        if (b.includes('back')) return -1;
        return 0;
    });
    return result;
}