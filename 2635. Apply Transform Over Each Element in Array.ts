function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const result = [];
    for(let index = 0; index < arr.length; index++) {
        const currentElement = arr[index];
        const currentResult = fn(currentElement, index);
        result.push(currentResult);
    }

    return result;
};
