import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {URL_API} from '@env';

const ForYou = () => {
  const [schedule, setShedule] = useState([]);

  const authReducer = useSelector(state => state.authReducer);
  const idUser = authReducer.user?.data?.id;

  // console.log(idUser);
  // console.log(schedule);

  const getScheduleCourse = () => {
    axios
      .get(`${URL_API}/dashboard/${idUser}?day=1`)
      .then(res => {
        console.log(res);
        return setShedule(res.data.result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getScheduleCourse();
  }, []);

  const scheduleData = [
    {
      id: 1,
      time: '08.00 - 09.40',
      first: 'Introduction to Banking Finance',
    },
    {
      id: 2,
      time: '11.00 - 11.40',
      first: 'History of Europe',
    },
  ];
  return (
    <View style={styles.container}>
      {schedule.map((schedule, index) => (
        <View key={index} style={styles.scheduleContainer}>
          <View style={styles.time}>
            <Text>{`${schedule.start_time ? '08.00' : 'none'} : ${
              schedule.end_time ? '11.00' : 'none'
            }`}</Text>
          </View>
          <View style={styles.title}>
            <View
              style={{
                ...styles.titleWrapper,
                display: !schedule.class_name ? 'none' : 'flex',
              }}>
              <Text>{schedule?.class_name}</Text>
            </View>
            <View
              style={{
                ...styles.titleWrapper,
                display: !schedule.second ? 'none' : 'flex',
              }}>
              <Text>{schedule?.second}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
export default ForYou;

const styles = StyleSheet.create({
  container: {},
  scheduleContainer: {
    flexDirection: 'row',
  },
  time: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 2,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    elevation: 2,
  },
  title: {
    flex: 7,
  },
  titleWrapper: {
    padding: 16,
    margin: 2,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    elevation: 2,
  },
});
