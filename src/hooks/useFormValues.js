import { useCallback, useState } from "react";

function useFormValues(init = {}) {
    const [formValues, setFormValues] = useState(init);

    const setFieldValue = useCallback((name, value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }, []);

    const handleChange = useCallback(
        (e) => {
            setFieldValue(e.target.name, e.target.value);
        },
        [setFieldValue]
    );

    return { formValues, setFieldValue, handleChange };
}

export default useFormValues;
