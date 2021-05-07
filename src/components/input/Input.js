import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const Input = ({placeholder, type}) => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={type === 'password' ? true : false}
      />
      <Button title="button" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Input;
