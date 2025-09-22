import { useContext } from "react";
import Context from "./Context";
import styles from "./Forms.module.scss";

// eslint-disable-next-line react/prop-types
function TextInput({ label, name, onChange, ...passProps }) {
    const { formValues, handleChange } = useContext(Context);

    return (
        <label className={styles.textInputWrapper}>
            <span className={styles.label}>{label}</span>
            <input
                {...passProps}
                className={styles.textInput}
                name={name}
                value={formValues[name]}
                onChange={(e) => {
                    if (onChange) onChange(e);
                    handleChange(e);
                }}
            />
        </label>
    );
}

export default TextInput;
