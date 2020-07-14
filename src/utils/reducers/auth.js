export const login = (state = {}, action) => {
    switch (action.type) {
        case 'SET_REGISTER':
            return action.payload;
        case 'CLEAR_REGISTER':
            return action.payload;
        default:
            return state;
    }
};
