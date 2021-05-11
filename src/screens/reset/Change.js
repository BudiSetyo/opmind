import React, {useState} from 'react';
import {ScrollView, StatusBar, View, Text, StyleSheet} from 'react-native';
import Input from '../../components/input/index';
import Btn from '../../components/button/index';

const Change = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
      />
      <View style={styles.header} />
      <View style={styles.title}>
        <Text style={styles.titleFont}>Create new password</Text>
      </View>
      <View style={styles.paragraf}>
        <Text style={styles.botParagraf}>
          Your new password must be different from previous used password!
        </Text>
      </View>
      <View style={styles.form}>
        <View>
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e)}
          />
        </View>
        <View style={{marginTop: 5}}>
          {!password ? (
            <Text style={{display: 'none'}} />
          ) : password.length < 8 ? (
            <Text>Must be at least 8 character</Text>
          ) : (
            <Text style={{display: 'none'}} />
          )}
        </View>
        <View style={{marginTop: 34}}>
          <Input
            placeholder="Confirm Password"
            type="password"
            value={confirm}
            onChange={e => setConfirm(e)}
          />
        </View>
        <View style={{marginTop: 5}}>
          {!confirm ? (
            <Text style={{display: 'none'}} />
          ) : confirm === password ? (
            <Text>Password match!</Text>
          ) : (
            <Text style={{display: 'none'}} />
          )}
        </View>
      </View>
      <View style={styles.button}>
        <Btn
          onPress={() => navigation.navigate('Success')}
          color="#5784BA"
          btnText="Create"
          fontColor="#FFF"
        />
      </View>
    </ScrollView>
  );
};

export default Change;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 23,
  },
  header: {
    marginTop: 46,
  },
  title: {
    marginTop: 18,
    alignItems: 'center',
  },
  titleFont: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  paragraf: {
    marginTop: 32,
    alignItems: 'center',
  },
  botParagraf: {
    fontSize: 16,
    width: '80%',
    textAlign: 'center',
  },
  form: {
    marginTop: 89,
  },
  button: {
    marginTop: 250,
    marginBottom: 24,
  },
});
