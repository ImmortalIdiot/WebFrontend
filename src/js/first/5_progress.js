function printProgress(percent) {
    if (percent === 100) {
        console.log('100% Completed')
        return
    }

    const discharge = Math.round(percent / 10)
    const countLoaded = '#'.repeat(discharge)
    const countNotLoaded = '-'.repeat(10 - discharge)

    console.log(`[${countLoaded}${countNotLoaded} ${percent}%]`)
}

const percent = 15
printProgress(percent)
