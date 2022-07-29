const INITIAL_STATE = [];

const registerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_REGISTER':
            return [
                ...state,
                action.data
            ];
        default:
            return state;
    }
}

export default registerReducer;
