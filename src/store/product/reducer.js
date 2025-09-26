import { GET_LIST, SET_LIST } from "./constants";

const initState = {
    list: [],
    isLoading: false,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                isLoading: true,
            };
        case SET_LIST:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default reducer;
