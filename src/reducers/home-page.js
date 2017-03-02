const initialState = {
    counter: 0
};

export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case "INCREMENT_COUNTER":
        {
            newState = Object.assign({}, state, { counter: state.counter + 1 });
            break;
        }
        default:
        {
            // do nothing
            newState = state;
        }
    }
    return newState;
}