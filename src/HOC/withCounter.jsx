import { useState } from "react";

function withCounter(Component) {
    const WrappedComponent = () => {
        const [counter, setCounter] = useState(0);

        return (
            <Component
                counter={counter}
                increase={() => setCounter(counter + 1)}
            />
        );
    };
    return WrappedComponent;
}

export default withCounter;
