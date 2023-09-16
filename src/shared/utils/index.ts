
/**
 * Flattens an object to an array of values. The keys are not preserved.
 * 
 * @param obj The object to flatten
 */
export function flattenObjectValuesToArray(
    obj: Object,
): Array<any> {
    return Object.values(obj).reduce((acc, val) => {
        if (val === null || val === undefined) return acc;
        if (typeof val === 'object') return acc.concat(flattenObjectValuesToArray(val));
        return acc.concat(val);
    }, []);
}


/**
 * Replaces all dashes in a string with spaces.
 * 
 * @param str The string to replace dashes with spaces.
 */
export function replaceDashesToSpace(str: string): string {
    return str.replace(/-/g, ' ')
}