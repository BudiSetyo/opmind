import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {URL_API} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({navigation}) => {
  const [id, setId] = useState(null);
  const [courseName, setCourseName] = useState('');

  const getId = async () => {
    try {
      const value = await AsyncStorage.getItem('idCourse');
      // console.log(value);
      return setId(Number(value));
    } catch (err) {
      console.log(err);
    }
  };

  const getCourseData = () => {
    axios
      .get(`${URL_API}/course/${id}`)
      .then(res => {
        // console.log(res);
        return setCourseName(res.data.result[0].classname);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getId();
    getCourseData();
  }, [id]);

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
            <Icon name="chevron-back" size={20} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.textTitle}>{courseName}</Text>
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
    paddingVertical: 13,
  },
  textTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
