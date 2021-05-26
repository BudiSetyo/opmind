import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const index = ({visible, onPress, message, children, childrenBorder}) => {
  return (
    <View style={StyleSheet.centeredView}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.btnView}>
              <TouchableOpacity onPress={onPress}>
                <Icon name="times-circle" color="#FF1313" size={20} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...styles.childrenView,
                display: children ? 'flex' : 'none',
                borderWidth: childrenBorder === true ? 1 : 0,
              }}>
              {children}
            </View>
            <View
              style={{...styles.textView, display: message ? 'flex' : 'none'}}>
              <Text style={styles.message}>{message}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '70%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 5,
  },
  btnView: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  textView: {
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ADA9BB',
    borderRadius: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
  childrenView: {
    marginBottom: 10,
    padding: 5,
    borderColor: '#ADA9BB',
    borderRadius: 10,
  },
});
