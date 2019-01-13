module.exports = (arr1, arr2) => 
    arr2.filter( x => !arr1.includes(x) ).concat( arr1.filter(y => !arr2.includes(y)) );
