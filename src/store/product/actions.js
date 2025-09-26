import http from "@/utils/http";
import { GET_LIST, SET_LIST } from "./constants";
import { hideLoading, showLoading } from "../ui";

export const getList = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_LIST,
        });
        dispatch(showLoading());

        try {
            const response = await http.get("/products");
            dispatch(setList(response.data.items));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(hideLoading());
        }
    };
};

export const setList = (payload) => {
    return {
        type: SET_LIST,
        payload,
    };
};
