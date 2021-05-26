import React from 'react';
import {View, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const index = ({children, visible, onPress}) => {
  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={visible}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={onPress}>
              <Icon name="close-circle" size={25} color="#FF1313" />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>{children}</View>
        </View>
      </Modal>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  iconContainer: {
    alignItems: 'flex-end',
    padding: 10,
  },
  content: {
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 0.7,
    borderRadius: 10,
    borderColor: '#000',
  },
});
