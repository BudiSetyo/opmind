import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#5784BA"
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>Notification</Text>
        <TouchableOpacity>
          <Icon name="close-circle" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 31,
  },
  titleText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
