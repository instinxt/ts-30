async function sleep(millis: number): Promise<void> {
    const sleepPromise: Promise<void> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, millis)
    })

    return sleepPromise;
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
