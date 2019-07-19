const roundTo = (n, digits) => {
    let multiplier
    let negative = false
    if (isNullUndefined(digits)) digits = 0
    multiplier = Math.pow(10, digits)

    if (n < 0) {
        negative = true
        n *= -1
    }
    n = parseFloat((n * multiplier).toFixed(11))
    n = (Math.round(n) / multiplier).toFixed(digits)
    if (negative) n = (n * -1).toFixed(2)
    return n
}

const isNullUndefined = (val) => {
    return val === undefined || val === null
}

const getSavedValue = (key) => {
    const val = localStorage[key]
    return isNullUndefined(val) ? null : JSON.parse(val)
}

export {
    roundTo,
    isNullUndefined,
    getSavedValue
}

