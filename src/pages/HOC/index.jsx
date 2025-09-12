import MyComponent1 from "../../components/MyComponent1";

const HOC = () => {
    return (
        <div>
            <h1>HOC</h1>
            <MyComponent1 />
        </div>
    );
};

// Các kỹ thuật tái sử dụng logic:
// 1. HOC - Higher Order Component
// 2. Render props - Children props
// 3. Custom hooks

export default HOC;
