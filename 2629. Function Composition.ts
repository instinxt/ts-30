type F = (x: number) => number;

function compose(functions: F[]): F {
    return function(x: number): number {
        let result = x;
        for(let index = functions.length - 1; index >= 0; index--) {
            const currentFunction = functions[index];
            result = currentFunction(result);
        }
        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
