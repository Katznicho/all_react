import React from 'react'
import Counters from './Counters'

function Counter(
    { counterData, handleDelete, handleIncrement, handleDecrement , markCompleted}
) {
    return (
        <div>
            {
                counterData.map(
                    count => <Counters
                        key={count.id}
                        countersData={count}
                        handleDelete={handleDelete}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        markCompleted = {markCompleted}
                    />
                )
            }
        </div>
    )
}

export default Counter
