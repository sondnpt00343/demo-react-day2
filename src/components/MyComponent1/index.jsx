import withCounter from "../../HOC/withCounter";

const MyComponent1 = withCounter(({ counter, increase }) => {
    return <button onClick={increase}>Increase ({counter})</button>;
});

export default MyComponent1;
