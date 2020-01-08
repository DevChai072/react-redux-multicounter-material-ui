import * as Constants from '../constants/constants'

export default (state = [], action) => {

    switch (action.type) {
        case Constants.ADD_COUNTER:
            return [
                ...state,
                {
                    id: action.id,
                    count: 0,
                    score: "0"
                }
            ]

        case Constants.CHANGE_SCORE:
            return state.map(item => 
                (item.id === action.payload.id)
                ? {...item, score: action.payload.score}
                : item
            )

        case Constants.INCREMENT:
            return state.map(item => 
                (item.id === action.payload.id)
                ? {...item, count: parseFloat(item.count) + parseFloat(action.payload.count)}
                : item
            )

        case Constants.DECREMENT:
            return state.map(item => 
                (item.id === action.payload.id)
                ? {...item, count: parseFloat(item.count) - parseFloat(action.payload.count)}
                : item
            )

        case Constants.DELETE_COUNTER:
            return state.filter(item => item.id !== action.id)

        default:
            return state
    }
}