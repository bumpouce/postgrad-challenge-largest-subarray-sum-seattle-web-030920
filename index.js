function largestSubarraySum (arr){

    let prevMax = Number.MIN_SAFE_INTEGER
    let currentMax = 0

    for (let i=0; i < arr.length; i++){
        currentMax = Math.max(currentMax + arr[i], 0)
        prevMax = Math.max(currentMax, prevMax)
    }

    return prevMax
}