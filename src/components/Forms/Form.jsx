import { forwardRef, useImperativeHandle } from "react";

import Context from "./Context";
import useFormValues from "@/hooks/useFormValues";
import styles from "./Forms.module.scss";

// eslint-disable-next-line react/prop-types
const Form = forwardRef(({ children, initValues, onSubmit }, ref) => {
    const { formValues, setFieldValue, handleChange } =
        useFormValues(initValues);

    useImperativeHandle(
        ref,
        () => ({
            setFieldValue,
        }),
        [setFieldValue]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues);
    };

    const values = {
        formValues,
        handleChange,
    };

    return (
        <Context.Provider value={values}>
            <form className={styles.form} onSubmit={handleSubmit}>
                {children}
            </form>
        </Context.Provider>
    );
});

Form.displayName = "Form";

export default Form;
