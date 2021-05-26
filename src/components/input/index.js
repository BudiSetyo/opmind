import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const index = ({placeholder, type, onChange, value}) => {
  const [hide, setHide] = useState(true);
  const [focus, setFocus] = useState(false);

  const labelStyle = StyleSheet.create({
    label: {
      position: 'absolute',
      left: 5,
      top: !focus ? 10 : -7,
      fontSize: !focus ? 18 : 16,
      color: '#ADA9BB',
    },
  });
  return (
    <View style={styles.wrapper}>
      <View style={styles.input}>
        <Text style={labelStyle.label}>{placeholder}</Text>
        <TextInput
          style={styles.inputText}
          keyboardType={type === 'number' ? 'numeric' : 'default'}
          secureTextEntry={type === 'password' ? hide : false}
          value={value}
          onChangeText={onChange}
          onFocus={value ? () => setFocus(true) : () => setFocus(!focus)}
          onBlur={value ? () => setFocus(true) : () => setFocus(!focus)}
        />
      </View>
      <View style={styles.icon}>
        <Icon
          style={type === 'password' ? {display: 'flex'} : {display: 'none'}}
          name={hide ? 'eye' : 'eye-off'}
          size={20}
          color="#010620"
          onPress={() => setHide(!hide)}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 5,
    paddingBottom: 0,
    borderWidth: 1,
    borderColor: '#ADA9BB',
    borderRadius: 10,
  },
  input: {
    flex: 9,
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 20,
    color: '#010620',
    paddingHorizontal: 0,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
