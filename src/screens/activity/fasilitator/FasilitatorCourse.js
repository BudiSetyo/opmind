import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {URL_API} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/Ionicons';

const FasilitatorCourse = ({navigation, navigate}) => {
  const [course, setCourse] = useState([]);

  const authReducer = useSelector(state => state.authReducer);
  const id = authReducer.user.data?.id;

  const storeIdCourse = async value => {
    try {
      await AsyncStorage.setItem('idCourse', value);
    } catch (e) {
      console.log(e);
    }
  };

  const getCourse = () => {
    axios
      .get(`${URL_API}/course/fasilitatorCourse/${id}`)
      .then(res => {
        console.log(res);
        return setCourse(res.data.info.result);
      })
      .catch(err => {
        return console.log(err);
      });
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <View>
      <View style={styles.myCourse}>
        <Text style={styles.textMyCourse}>My Class</Text>
      </View>

      <View style={styles.titleContainer}>
        <View style={{flex: 6}}>
          <Text style={styles.titleText}>Class Name</Text>
        </View>
        <View style={{flex: 6}}>
          <Text style={{...styles.titleText, textAlign: 'center'}}>
            Students
          </Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>

      {course.map((course, index) => (
        <View key={index} style={styles.courseContainer}>
          <View style={{...styles.courseItem, flex: 6}}>
            <Text
              onPress={() => {
                const idString = course.id.toString();
                storeIdCourse(idString);
                return navigate();
              }}>
              {course.classname}
            </Text>
          </View>
          <View
            style={{
              ...styles.courseItem,
              alignItems: 'center',
              flex: 6,
              flexDirection: 'row',
            }}>
            <Text style={{marginRight: 5}}>{course.students}</Text>
            <Icon name="person" />
          </View>
          <View style={{...styles.courseItem, alignItems: 'center', flex: 1}}>
            <Icon name="chevron-forward" size={16} color="#000" />
          </View>
        </View>
      ))}

      <View style={styles.viewContainer}>
        <TouchableOpacity style={styles.viewBtn} onPress={navigation}>
          <Text style={{marginRight: 8}}>view all</Text>
          <Icon name="chevron-forward" size={14} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FasilitatorCourse;

const styles = StyleSheet.create({
  myCourse: {
    paddingHorizontal: 7,
  },
  textMyCourse: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 1,
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  courseItem: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  viewContainer: {
    alignItems: 'center',
    marginTop: 13,
  },
  viewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
