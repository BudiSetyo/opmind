import React from 'react';
import {Container, Header, Content, Footer, Text} from 'native-base';
import {StyleSheet} from 'react-native';

import Input from '../../components/input/index';

const Login = () => {
  return (
    <Container style={styles.container}>
      <Header style={styles.header} noShadow={true}>
        <Text>Login</Text>
      </Header>
      <Content>
        <Input placeholder="Username or Email" type="text" />
        <Input placeholder="Password" type="password" />
      </Content>
      <Footer style={styles.footer}>
        <Text>
          New user? <Text>Register</Text>
        </Text>
      </Footer>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
  },
  header: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
});
