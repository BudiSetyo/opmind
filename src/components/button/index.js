import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const index = ({btnText, onPress, color, fontColor}) => {
  const styles = StyleSheet.create({
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color,
      padding: 16,
      borderRadius: 10,
    },
    btnText: {
      color: fontColor,
      fontSize: 16,
      fontWeight: '500',
    },
  });
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Text onPress={onPress} style={styles.btnText}>
          {btnText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
