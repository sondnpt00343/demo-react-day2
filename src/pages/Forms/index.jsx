import { useRef } from "react";

import Button from "@/components/Button";
import { Form, TextInput } from "@/components/Forms";

const styles = {
    wrapper: { margin: 20 },
    heading: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 20,
    },
    submitBtn: {
        marginTop: 10,
    },
};

const initValues1 = {
    email: "1@gmail.com",
    password: "11111111",
};

const initValues2 = {
    email: "2@gmail.com",
    password: "22222222",
};

function Forms() {
    const form2Ref = useRef();

    const handleSubmit1 = (formValues) => {
        // Call API...
        console.log(formValues);
    };

    const handleSubmit2 = (formValues) => {
        // Call API...
        console.log(formValues);
    };

    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>Forms Demo</h1>
            <Form initValues={initValues1} onSubmit={handleSubmit1}>
                <TextInput
                    label="Email"
                    name="email"
                    placeholder="Enter email..."
                />
                <TextInput
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter password..."
                    onChange={(e) => {
                        // form2Ref.current.setFieldValue(
                        //     "password",
                        //     e.target.value
                        // );
                    }}
                />
                <Button style={styles.submitBtn} primary>
                    Login 1
                </Button>
            </Form>

            <Form
                ref={form2Ref}
                initValues={initValues2}
                onSubmit={handleSubmit2}
            >
                <TextInput
                    label="Email"
                    name="email"
                    placeholder="Enter email..."
                />
                <TextInput
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter password..."
                />
                <Button style={styles.submitBtn} primary>
                    Login 2
                </Button>
            </Form>
        </div>
    );
}

export default Forms;
