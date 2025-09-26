import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

// Reducers
import productReducer from "./product/reducer";
import provinceReducer from "./province/reducer";
import uiReducer from "./ui/reducer";

const rootReducer = combineReducers({
    product: productReducer,
    province: provinceReducer,
    ui: uiReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
