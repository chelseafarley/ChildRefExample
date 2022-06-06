import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import ValidatingInput from './ValidatingInput';
import { useRef, useState } from 'react';

export default function App() {
  let childRef = useRef(null);
  let [errors, setErrors] = useState([]);

  let showErrors = () => {
    return errors.map((error, index) => {
      return <Text key={index}>{error}</Text>
    }); 
  };

  return (
    <View style={styles.container}>
      {showErrors()}
      <ValidatingInput childRef={childRef} placeholder="Name" />
      <Button onPress={() => setErrors(childRef.current.validate())} title="Validate" />
      <Text>Hi {childRef.current.value}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
