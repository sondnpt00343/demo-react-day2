import { createContext } from "react";

const Context = createContext();

// eslint-disable-next-line react/prop-types
const Provider = ({ store, children }) => {
    return <Context.Provider value={store}>{children}</Context.Provider>;
};

export { Context, Provider };
