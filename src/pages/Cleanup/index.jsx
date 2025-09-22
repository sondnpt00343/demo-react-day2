import { useEffect, useState } from "react";

function Cleanup() {
    // Local state
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const handle = () => {
            console.log(window.scrollY);
        };

        document.addEventListener("scroll", handle);

        return () => {
            document.removeEventListener("scroll", handle);
        };
    }, [counter]);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>
                Counter is {counter}
            </button>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam ipsum temporibus ipsam laborum, repellat iusto
                doloremque numquam quos ab, dolore natus. Ab quis error quisquam
                aut voluptates blanditiis, voluptatem vitae.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam ipsum temporibus ipsam laborum, repellat iusto
                doloremque numquam quos ab, dolore natus. Ab quis error quisquam
                aut voluptates blanditiis, voluptatem vitae.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam ipsum temporibus ipsam laborum, repellat iusto
                doloremque numquam quos ab, dolore natus. Ab quis error quisquam
                aut voluptates blanditiis, voluptatem vitae.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam ipsum temporibus ipsam laborum, repellat iusto
                doloremque numquam quos ab, dolore natus. Ab quis error quisquam
                aut voluptates blanditiis, voluptatem vitae.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam ipsum temporibus ipsam laborum, repellat iusto
                doloremque numquam quos ab, dolore natus. Ab quis error quisquam
                aut voluptates blanditiis, voluptatem vitae.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam ipsum temporibus ipsam laborum, repellat iusto
                doloremque numquam quos ab, dolore natus. Ab quis error quisquam
                aut voluptates blanditiis, voluptatem vitae.
            </p>
        </div>
    );
}

export default Cleanup;
