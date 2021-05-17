import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#5784BA"
      />
      <View>
        <View style={styles.titleWrapper}>
          <TouchableOpacity onPress={navigation}>
            <Icon name="chevron-back" size={32} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.textTitle}>My Class</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#5784BA',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textTitle: {
    marginLeft: 10,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
