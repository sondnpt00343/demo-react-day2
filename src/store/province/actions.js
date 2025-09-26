import { SET_LIST } from "./constants";

export const setList = (payload) => {
    return {
        type: SET_LIST,
        payload,
    };
};
