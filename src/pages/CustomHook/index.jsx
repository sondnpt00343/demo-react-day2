import { useCounter } from "../../hooks";

const CustomHook = () => {
    const [counter, increase] = useCounter(10);

    return <button onClick={increase}>Increase ({counter})</button>;
};

// Các kỹ thuật tái sử dụng logic:
// 1. HOC - Higher Order Component
// 2. Render props - Children props
// 3. Custom hooks

export default CustomHook;
