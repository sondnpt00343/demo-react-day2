import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import Modal from "../../components/Modal";

const ChildComponent = forwardRef((props, ref) => {
    const [counter, setCounter] = useState(0);

    useImperativeHandle(
        ref,
        () => {
            return {
                increase() {
                    setCounter(counter + 1);
                },
            };
        },
        [counter]
    );

    const handleCounterChange = () => {
        setCounter(counter + 1);
    };

    return <button onClick={handleCounterChange}>Counter is {counter}</button>;
});

ChildComponent.displayName = "ChildComponent";

function Hooks() {
    const [isOpen, setIsOpen] = useState(false);
    const childRef = useRef(null);

    const handleRef = (modal) => {
        console.log(modal);
        // if (modal) modal.open();
    };

    return (
        <div>
            <ChildComponent ref={childRef} />
            <button onClick={() => childRef.current.increase()}>
                Increase
            </button>
            <Modal
                ref={handleRef}
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
            >
                <h1>Modal Content</h1>
                <button onClick={() => setIsOpen(false)}>Close modal</button>
            </Modal>
            <button onClick={() => setIsOpen(true)}>Open modal</button>
        </div>
    );
}

export default Hooks;
