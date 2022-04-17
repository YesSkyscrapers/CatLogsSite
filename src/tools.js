export const convertNumberToString = (_amount) => {
    let count = 0
    let amount = _amount
    let trail = _amount
    let prevTrail = trail;
    while (amount > 0) {
        count++
        prevTrail = trail;
        trail = amount;
        amount = Math.floor(amount / 1000);
    }

    let letter = ""
    switch (count - 1) {
        case 3: {
            letter = "Т"
            break;
        }
        case 2: {
            letter = "М"
            break;
        }
        case 1: {
            letter = "К"
            break;
        }
        case 0: {
            letter = ""
            break;
        }
        case -1: {
            letter = ""
            break;
        }
        default: {
            letter = "?"
            break;
        }
    }

    trail = Math.floor(trail * 100) / 100

    let result = `${trail}${letter}`
    let requiredDecimalLength = 5 - result.length
    if (requiredDecimalLength > 1) {
        requiredDecimalLength = requiredDecimalLength - 1;
        return `${trail}.${String(prevTrail).slice(0, 2)}${letter}`
    } else {
        return result
    }
}