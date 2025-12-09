type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const result = [];
    for(let index = 0; index < arr.length; index++) {
        const currentElement = arr[index];
        const isTruthy = Boolean(fn(currentElement, index));
        if(isTruthy) {
            result.push(currentElement);
        }
    }

    return result;
};
