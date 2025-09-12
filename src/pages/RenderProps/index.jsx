import { useEffect, useState } from "react";
// import Modal from "../../components/Modal";

// eslint-disable-next-line react/prop-types
function Counter({ children }) {
    const [counter, setCounter] = useState(0);
    const increase = () => setCounter(counter + 1);

    return children({ counter, increase });
}

// eslint-disable-next-line react/prop-types
function List({ data = [], children }) {
    const handleClick = () => {
        console.log("Clicked!");
    };

    return <ul>{data.map((item) => children({ item, handleClick }))}</ul>;
}

const RenderProps = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => {
                setUsers(users);
            });
    }, []);

    return (
        <div>
            <h1>RenderProps</h1>
            <List data={users}>
                {({ item, handleClick }) => (
                    <li key={item.id} onClick={handleClick}>
                        {item.name}
                    </li>
                )}
            </List>
            <List data={users}>
                {({ item, handleClick }) => (
                    <li key={item.id} onClick={handleClick}>
                        <span>{item.name}</span>
                    </li>
                )}
            </List>
            <Counter>
                {({ counter, increase }) => (
                    <button onClick={increase}>Increase ({counter})</button>
                )}
            </Counter>
            <Counter>
                {({ counter, increase }) => (
                    <button onClick={increase}>Increase ({counter})</button>
                )}
            </Counter>
        </div>
    );
};

// Các kỹ thuật tái sử dụng logic:
// 1. HOC - Higher Order Component
// 2. Render props - Children props
// 3. Custom hooks

export default RenderProps;
