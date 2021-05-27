import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import {URL_API} from '@env';

const All = () => {
  const [schedule, setShedule] = useState([]);

  const getSchedule = () => {
    axios
      .get(`${URL_API}/dashboard?day=5`)
      .then(res => {
        console.log(res.data.result);
        return setShedule(res.data.result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSchedule();
  }, []);

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
          </View>
        </View>
      ))}
    </View>
  );
};

export default All;

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
