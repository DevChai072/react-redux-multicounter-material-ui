export default (state = [], action) => {
    
    const financial = (number, numString) => {
        const strlen = numString.length - 1
        const hasPoint = numString.indexOf('.')
        const decpoint = (hasPoint != -1) ? strlen - hasPoint : 0
        return number.toFixed(decpoint) * 100
    }

    const financial2 = (x) => {
        const strlen = x.length - 1
        const hasPoint = x.indexOf('.')
        const decpoint = (hasPoint != -1) ? strlen - hasPoint : 0
        return decpoint
    }

    const setDecemal = (value, point) => {
        let foo = value.toString() + "."
        for (let i = 0; i < point; i++) {
            foo = foo += "0";
        }
        // console.log(foo)
        // return parseFloat(foo)
        return foo
    }

    const prepareIncrement = (prevCount, newScore) => {
        // console.log(prevCount, newScore)

        // const array = [parseFloat(prevCount), parseFloat(newScore)]
        // console.log("array", array)
        // const maxArr = Math.max(...array)
        // const sumPoint = financial2(maxArr.toString())
        // console.log("sumPoint", sumPoint)

        // const countDecemal = setDecemal(array[0], sumPoint)
        // prevCount = setDecemal(array[0], sumPoint)
        // console.log(parseFloat(countDecemal), parseFloat(newScore))

        // if (array[0] < array[1]) {
        //     const countDecemal = setDecemal(array[0], sumPoint)
        //     console.log("countDecemal", countDecemal)
        // } else {
        //     const scoreDecemal = setDecemal(array[1], sumPoint)
        //     console.log("scoreDecemal", scoreDecemal)
        // }

        const sum = parseFloat(prevCount) + parseFloat(newScore)
        const foo = Math.round(sum * 100) / 100
        return parseFloat(foo)
    }

    // const prepareDecrement = (prevCount, newScore) => {

    //     const array = [parseFloat(prevCount), parseFloat(newScore)]
    //     const maxArr = Math.max(...array)
    //     console.log("maxArr", maxArr)
    //     const sumPoint = financial2(maxArr.toString())

    //     if (array[0] < array[1]) {
    //         const countDecemal = setDecemal(array[0], sumPoint)
    //         prevCount = countDecemal
    //     } else {
    //         const scoreDecemal = setDecemal(array[1], sumPoint)
    //         newScore = scoreDecemal
    //     }
    //     // console.log(parseFloat(prevCount))
    //     // console.log(parseFloat(newScore))
    //     const sum = parseFloat(prevCount) - parseFloat(newScore)
    //     return sum
    // }

    switch (action.type) {
        case 'ADD_COUNTER':
            return [
                ...state,
                {
                    id: action.id,
                    count: 0,
                    score: "0"
                }
            ]

        case 'CHANGE_SCORE':
            return state.map(item => 
                (item.id === action.payload.id)
                ? {...item, score: action.payload.score}
                : item
            )

        case 'INCREMENT':
            return state.map(item => 
                (item.id === action.payload.id)
                ? {...item, count: parseFloat(item.count) + parseFloat(action.payload.count)}
                    // parseFloat(item.count) + parseFloat(action.payload.count)}
                    // prepareIncrement(item.count, action.payload.count)}
                    // Math.floor(financial(parseFloat(item.count) + parseFloat(action.payload.count), action.payload.count))}
                    // financial(parseFloat(item.count) + parseFloat(action.payload.count), action.payload.count)
                : item
            )

        case 'DECREMENT':
            return state.map(item => 
                (item.id === action.payload.id)
                ? {...item, count: parseFloat(item.count) - parseFloat(action.payload.count)}
                // ? {...item, count: prepareDecrement(item.count, action.payload.count)}
                // ? {...item, count: financial(parseFloat(item.count) - parseFloat(action.payload.count), action.payload.count)}
                : item
            )

        case 'DELETE_COUNTER':
            return state.filter(item => item.id !== action.id)

        default:
            return state
    }
}