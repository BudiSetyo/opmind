import React, {useState} from 'react';
import {Item, Input, Label} from 'native-base';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const index = ({placeholder, type, onChange}) => {
  const [hide, setHide] = useState(true);
  console.log(hide);
  return (
    <Item style={styles.container}>
      <Item floatingLabel style={styles.input}>
        <Label style={styles.label}>{placeholder}</Label>
        <Input
          style={styles.inputValue}
          secureTextEntry={type === 'password' ? hide : false}
          keyboardType={type === 'number' ? 'numeric' : 'default'}
          onChangeText={onChange}
        />
      </Item>

      <Item style={styles.icon}>
        <Icon
          onPress={() => {
            setHide(!hide);
          }}
          name={hide ? 'eye' : 'eye-slash'}
          size={20}
          color="#000"
          style={type === 'password' ? {display: 'flex'} : {display: 'none'}}
        />
      </Item>
    </Item>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 32,
    marginLeft: 32,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10,
  },
  input: {
    flex: 9,
    justifyContent: 'center',
    borderBottomWidth: 0,
  },
  label: {
    marginTop: 5,
    marginLeft: 5,
  },
  inputValue: {
    marginBottom: 5,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 0,
  },
});
