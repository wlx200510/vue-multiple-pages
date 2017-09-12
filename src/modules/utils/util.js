/**
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

function find (list, f) {
    return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 * 
 * @param {*} obj 
 * @param {Array<Object>} cache
 * @return {*}
 */

 export function deepCopy (obj, cache = []) {
     if (obj === null || typeof obj !== 'object') {
         return obj  // just return if obj is immutable value
     }

     // test if obj is in circular structure
     const hit = find(cache, c => c.original === obj)
     if (hit) {
         return hit.copy
     }

     const copy = Array.isArray(obj) ? [] : {}
     // we want to refer it in recursive deepCopy
     cache.push({
         original: obj,
         copy
     })

     Object.keys(obj).forEach(key => {
         copy[key] = deepCopy(obj[key], cache)
     })

     return copy
 }