import { useState } from "react";

function useCounter(init = 0) {
    const [counter, setCounter] = useState(init);
    const increase = () => setCounter(counter + 1);

    return [counter, increase];
}

export default useCounter;
