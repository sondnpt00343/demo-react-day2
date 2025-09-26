import { useDispatch, useSelector } from "react-redux";

const styles = {
    wrapper: { margin: 20 },
    heading: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 20,
    },
    theme: {
        marginTop: 30,
    },
    btns: {
        marginTop: 10,
    },
};

function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    console.log("Counter: re-render");

    return (
        <div>
            <h2 style={styles.heading}>{counter}</h2>
            <button
                onClick={() => {
                    dispatch({
                        type: "increase",
                    });
                }}
            >
                Increase
            </button>
        </div>
    );
}

function Theme() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    console.log("Theme: re-render");

    return (
        <div style={styles.theme}>
            <h2>Theme: {theme}</h2>
            <div style={styles.btns}>
                <button
                    onClick={() => {
                        dispatch({
                            type: "setTheme",
                            payload: "light",
                        });
                    }}
                >
                    Light
                </button>
                <button
                    onClick={() => {
                        dispatch({
                            type: "setTheme",
                            payload: "dark",
                        });
                    }}
                >
                    Dark
                </button>
            </div>
        </div>
    );
}

const Redux = () => {
    console.log("Redux: re-render");

    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>Redux Demo</h1>
            <Counter />
            <Theme />
        </div>
    );
};

export default Redux;
