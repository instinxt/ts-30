type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    const num1 = await promise1;
    const num2 = await promise2;
    const sumPromise: P = new Promise((resolve, reject) => {
        const sum = num1 + num2;
        resolve(sum);
    });

    return sumPromise;
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
