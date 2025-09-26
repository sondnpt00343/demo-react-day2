import { useSelector } from "react-redux";
import { getList } from "./selectors";

export const useProductsList = () => {
    const products = useSelector(getList);
    return products;
};
