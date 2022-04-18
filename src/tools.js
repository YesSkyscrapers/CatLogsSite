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
        let decimal = `${String(prevTrail).slice(String(trail).length, String(trail).length + 2)}`
        return `${trail}${decimal.length > 0 ? `.${decimal}` : ""}${letter}`
    } else {
        return result
    }
}

export const getRankColor = (rank) => {
    if (rank <= 1) {
        return '#e5cc80'
    } else if (rank <= 25) {
        return '#e268A8'
    } else if (rank <= 100) {
        return '#ff8000'
    } else if (rank <= 250) {
        return '#a335ee'
    } else if (rank <= 1000) {
        return '#0070ff'
    } else if (rank <= 10000) {
        return '#1eff00'
    } else {
        return '#666666'
    }
}