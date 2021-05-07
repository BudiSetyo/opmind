import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Input from '../../components/input/Input';

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Login</Text>
      </View>
      <View>
        <TextInput secureTextEntry={true} placeholder="Username" />
      </View>
      <Input placeholder="input" type="password" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default Login;
