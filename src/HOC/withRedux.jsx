import { Provider as ReduxProvider } from "react-redux";
import store from "@/store/store";

function withRedux(Component) {
    const WrappedComponent = () => {
        return (
            <ReduxProvider store={store}>
                <Component />
            </ReduxProvider>
        );
    };

    return WrappedComponent;
}

export default withRedux;
