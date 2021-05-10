import React from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Logo from '../../assets/images/reset/success.svg';
const Change = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
      />
      <View style={styles.header} />
      <View style={styles.title}>
        <Text style={styles.titleFont}>Password changed!</Text>
      </View>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity>
          <Text style={styles.btnText}>Login to your account</Text>
        </TouchableOpacity>
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
  logo: {
    alignItems: 'center',
    marginTop: 96,
  },
  btnWrapper: {
    alignItems: 'center',
    marginTop: 96,
    marginBottom: 24,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
