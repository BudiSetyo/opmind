import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const Schedule = () => {
  const [tab, setTab] = useState(0);

  const month = moment().format('MMMM YYYY');
  const days = [0, 1, 2, 3, 4, 5, 6];

  const data = [
    {
      id: 1,
      day: 0,
      time: '08.00 - 09.00',
      schedule: 'Css beginner',
      students: 25,
    },
    {
      id: 2,
      day: 0,
      time: '11.00 - 13.00',
      schedule: 'Redux',
      students: 23,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View>
          <Text style={styles.textTitle}>My Class</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name="calendar-outline" size={18} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.textDate}>{month}</Text>
        </View>

        <View>
          <View style={styles.calContainer}>
            {days.map(day => {
              const currentDay = moment().add(day, 'days').format('dd');
              const currentCal = moment().add(day, 'days').format('DD');

              return (
                <View key={day}>
                  <TouchableOpacity
                    style={{
                      ...styles.dayBtn,
                      backgroundColor: tab === day ? '#5784BA' : 'transparent',
                    }}
                    onPress={() => setTab(day)}>
                    <Text
                      style={{
                        ...styles.textDay,
                        marginBottom: 10,
                        color: tab === day ? '#FFF' : '#000',
                      }}>
                      {currentDay}
                    </Text>
                    <Text
                      style={{
                        ...styles.textDay,
                        color: tab === day ? '#FFF' : '#000',
                      }}>
                      {currentCal}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          <View>
            {data.map((item, index) => (
              <View key={index} style={styles.scheduleContainer}>
                <View style={styles.scheduleTime}>
                  <Text style={styles.scheduleText}>{item.time}</Text>
                </View>

                <View style={styles.scheduleTitle}>
                  <Text style={styles.scheduleText}>{item.schedule}</Text>
                </View>

                <View style={styles.scheduleMember}>
                  <Text style={styles.scheduleText}>{item.students}</Text>
                  <Icon name="person" size={12} color="#000" />
                </View>
              </View>
            ))}
          </View>

          <View style={{marginTop: 12, alignItems: 'center'}}>
            <TouchableOpacity style={styles.addTaskBtn}>
              <Icon name="add-circle" size={16} color="#FFF" />
              <Text style={styles.addTaskTesk}>New Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 24,
    paddingVertical: 16,
    minHeight: 350,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textDate: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  calContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 11,
    marginBottom: 22,
  },
  dayBtn: {
    padding: 5,
    minWidth: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
  textDay: {
    fontWeight: 'bold',
  },
  scheduleContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: 22,
    margin: 2,
    borderRadius: 5,
    shadowColor: '#000',
    elevation: 2,
  },
  scheduleTime: {
    flex: 3,
    justifyContent: 'center',
  },
  scheduleTitle: {
    flex: 6,
    justifyContent: 'center',
  },
  scheduleMember: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  scheduleText: {
    fontSize: 14,
  },
  addTaskBtn: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 13,
    paddingVertical: 8,
    backgroundColor: '#5784BA',
    borderRadius: 20,
  },
  addTaskTesk: {
    marginLeft: 5,
    fontSize: 16,
    color: '#FFF',
  },
});
