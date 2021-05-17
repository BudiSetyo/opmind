import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ForYou = () => {
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
      {scheduleData.map(schedule => (
        <View key={schedule.id} style={styles.scheduleContainer}>
          <View style={styles.time}>
            <Text>{schedule.time}</Text>
          </View>
          <View style={styles.title}>
            <View
              style={{
                ...styles.titleWrapper,
                display: !schedule.first ? 'none' : 'flex',
              }}>
              <Text>{schedule?.first}</Text>
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
