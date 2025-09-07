import { useEffect, useState } from "react";

function Content() {
    const [n, setN] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Callback useEffect được gọi!");
    }, [n, counter]);

    return (
        <div>
            <h1 onClick={() => setN(n + 1)}>Content {n}</h1>
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Counter is {counter}
            </button>
        </div>
    );
}

function UseState() {
    // const [counter, setCounter] = useState(0);
    const [mounted, setMounted] = useState(false);

    return (
        <div>
            <button onClick={() => setMounted(!mounted)}>Toggle</button>
            {mounted && <Content />}
        </div>
    );

    // useEffect(() => {
    //     // Callback được gọi trong 2 tình huống
    //     // 1. Khi component được mounted
    //     // 2. Khi component re-render và có ít nhất 1 deps thay đổi (so sánh nghiêm ngặt ===)
    //     console.log("Callback useEffect được gọi!");
    // }, []);
}

export default UseState;
