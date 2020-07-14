export const login = (event, type) => {
    return async (dispatch, getState) => {
        const person = { ...getState().login };
        if (type === 'email') {
            person.email = event;
        } else {
            person.password = event;
        }
        await dispatch({ type: 'SET_REGISTER', payload: person });
    };
};
