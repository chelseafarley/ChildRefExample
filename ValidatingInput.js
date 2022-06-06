import { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function ValidatingInput(props) {
    let [value, setValue] = useState("");

    let validate = () => {
        let errors = [];
        if (value === "") {
            errors.push("Must enter a value");
        }

        return errors;
    };

    props.childRef.current = {
        validate: validate,
        value: value
    };

    return (
        <TextInput style={styles.input} value={value} placeholder={props.placeholder} onChangeText={(text) => setValue(text)} />
    );
}

const styles = StyleSheet.create({
    input: {
        alignSelf: "stretch",
        padding: 4,
        margin: 8
    }
});