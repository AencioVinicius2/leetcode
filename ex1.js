/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const sortArr = nums.sort((a, b) => a-b);
    const repeatedN = [];
    let lastIndex = null;
    for(i = 0; i < sortArr.length; i++) {
        if(i > 0) {
            lastIndex = sortArr[i-1];
            if(lastIndex === sortArr[i]) {
                console.log('caiu no if')
                repeatedN.push(sortArr[i]);
            }
        }
    }
    return repeatedN[0];
};


console.log(repeatedNTimes([2,1,2,5,3,2]));