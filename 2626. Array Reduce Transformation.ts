type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    if(nums.length === 0) {
        return init;
    }

    let result = fn(init, nums[0]);
    for(let index = 1; index < nums.length; index++) {
        result = fn(result, nums[index]);
    }

    return result;
};
