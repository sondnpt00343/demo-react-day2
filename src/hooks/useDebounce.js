import { useEffect, useState } from "react";

function useDebounce(input, delay) {
    const [state, setState] = useState(input);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setState(input);
        }, delay);

        return () => clearTimeout(timerId);
    }, [input, delay]);

    return state;
}

export default useDebounce;
