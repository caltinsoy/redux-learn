const counterReducer = (state = 0, action) => { // reducer transforms the state to next state !
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;