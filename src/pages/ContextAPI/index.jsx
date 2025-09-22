import { Context as ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

const styles = {
    wrapper: { margin: 20 },
    heading: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 20,
    },
};

function A() {
    console.log("A render");
    return <B />;
}

function B() {
    const { currentUser } = useContext(ThemeContext);
    console.log("B render", currentUser);

    return <C />;
}

function C() {
    const { theme, toggle } = useContext(ThemeContext);

    console.log("C render");

    return (
        <div>
            <h1>Current theme: {theme}</h1>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
}

// Option 1: Parent -> A -> C (cần data)
// Option 2: Parent -> C (cần data)

function ContextAPI() {
    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>ContextAPI Demo</h1>
            <A />
        </div>
    );
}

export default ContextAPI;

// redux: Quy trình quản lý state
// react-redux: Cầu nối giữa React & Redux
