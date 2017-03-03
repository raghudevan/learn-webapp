const initialState = {
    counter: 0,
    info: 'sample text'
};

export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case "INCREMENT_COUNTER":
        {
            newState = Object.assign({}, state, { counter: state.counter + 1 });
            break;
        }
        case "GET_INFO_SUCCESS":
        {
            newState = Object.assign({}, state, { info: action.payload });
            break;
        }
        case "GET_INFO_FAILURE":
        {
            newState = Object.assign({}, state, { info: `unable to get the info: ${action.payload}` });
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