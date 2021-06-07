import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {logoutHandler} from '../../redux/actions/auth';

import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../../components/modal/index';

const Help = props => {
  const [visible, setVisible] = useState(false);

  const onLogoutHandler = () => {
    props.onLogoutHandler();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help</Text>
      <View>
        <TouchableOpacity style={styles.optionBtn}>
          <View style={{flex: 2}}>
            <Icon name="help-circle" size={25} color="#3F4356" />
          </View>
          <View style={{flex: 7}}>
            <Text style={{fontSize: 20, color: '#3F4356'}}>F.A.Q.</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon name="chevron-forward" size={25} color="#3F4356" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionBtn}
          onPress={() => setVisible(true)}>
          <View style={{flex: 2}}>
            <Icon name="log-out" size={25} color="#FF1313" />
          </View>
          <View style={{flex: 7}}>
            <Text style={{fontSize: 20, color: '#FF1313'}}>Logout</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}} />
        </TouchableOpacity>

        <Modal visible={visible} onPress={() => setVisible(!visible)}>
          <View style={styles.modalWrapper}>
            <Text style={{fontSize: 20, marginBottom: 20}}>Are you sure ?</Text>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{...styles.btnLogout, backgroundColor: '#FF1313'}}
                onPress={onLogoutHandler}>
                <Text style={{fontSize: 16, color: '#FFF'}}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{...styles.btnLogout, backgroundColor: '#5784BA'}}
                onPress={() => setVisible(!visible)}>
                <Text style={{fontSize: 16, color: '#FFF'}}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  console.log(state.authReducer);
  return {
    authReducer: state.authReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogoutHandler: () => {
      dispatch(logoutHandler());
    },
  };
};

const ConnectHelp = connect(mapStateToProps, mapDispatchToProps)(Help);

export default ConnectHelp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    minHeight: 240,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  optionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  modalWrapper: {
    alignItems: 'center',
  },
  btnLogout: {
    width: 50,
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
