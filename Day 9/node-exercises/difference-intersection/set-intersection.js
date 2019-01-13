module.exports = (arr1, arr2) => 
    Array.from( new Set(arr1.concat(arr2)) ).filter( k => arr1.includes(k) && arr2.includes(k) );
