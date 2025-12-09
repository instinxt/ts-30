function createCounter(n: number): () => number {
    let counter = n;
    return function() {
        let currCounter = counter;
        counter += 1;
        return currCounter;
    }
}
