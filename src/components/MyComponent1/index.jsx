import withCounter from "@/hoc/withCounter";

const MyComponent1 = withCounter(({ counter, increase }) => {
    return <button onClick={increase}>Increase ({counter})</button>;
});

export default MyComponent1;
