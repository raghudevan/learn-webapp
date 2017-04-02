export function incrementCounter() {
    return {
        type: "INCREMENT_COUNTER",
        payload: 1
    };
}

export function makeCall(url, options, actionType) {
    return (dispatch) => {
        fetch(url, options).then((responseBody) => {
            responseBody.json().then(response => {
                dispatch({ type: `${actionType}_SUCCESS`, payload: response });
            });
        }, (err) => {
            dispatch({ type: `${actionType}_FAILURE`, payload: err });
        });
    }
}