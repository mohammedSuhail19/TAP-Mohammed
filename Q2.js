
const solution = (arr, target) => {
    let map = {};

    for(let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if(map[complement] !== undefined) return [map[complement], i];
        map[arr[i]] = i;
    }
    
    return [-1, -1];
}