export const formatPrice = (price) => {
    const priceStr = `${price}`
    let priceFormated = priceStr

    switch (priceStr.length) {
        case 1: {
            priceFormated = `0.0${priceStr}`
            break
        }
        case 2: {
            priceFormated = `0.${priceStr}`
            break
        }
        default: {
            const priceBeforeDigit = priceStr.slice(0, -2)
            const priceAfterDigit = priceStr.slice(-2)

            priceFormated = `${priceBeforeDigit}.${priceAfterDigit}`
        }
    }

    return priceFormated
}
