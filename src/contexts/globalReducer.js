export default (state, action) => {
    switch(action.type) {
        case 'INPUT':
            return {
                ...state,
                input: action.payload
            }
        case 'ALERT':
            return {
                ...state,
                alert: true
            }
        case 'NOT_ALERT':
            return {
                ...state,
                alert: false
            }
        default: 
            return state
    }
}