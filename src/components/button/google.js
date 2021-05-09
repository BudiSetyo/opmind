import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import GoogleIcon from '../../assets/images/google.svg';

const google = ({btnText, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <GoogleIcon />
        <Text onPress={onPress} style={styles.btnText}>
          {btnText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default google;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 13, 79, 0.08)',
    padding: 14,
    borderRadius: 10,
  },
  btnText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});
