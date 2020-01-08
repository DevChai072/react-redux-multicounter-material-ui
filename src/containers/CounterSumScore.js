import React from 'react'

const CounterSumScore = ({counts}) => {
    
    const allCount = counts.map(item => parseFloat(item.count))
    const sumScore = allCount.length > 0 ? allCount.reduce((total, amount) => total + amount) : 0
    // const foo = Math.round(sumScore * 100) / 100
    return (
        <>
            {/* {foo} */}
            {sumScore}
        </>
    )
}
export default CounterSumScore