import { useSelector } from "react-redux";

export const useLoading = () => {
    const loading = useSelector((state) => state.ui.loading);
    return loading;
};
