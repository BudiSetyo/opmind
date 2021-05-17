import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import AllSchedule from './All';
import ForYou from './ForYou';

const Schedule = () => {
  const [tab, setTab] = useState(0);
  const tabList = ['All Schedule', 'For You'];
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View>
          <Text style={styles.textTitle}>My Class</Text>
          <Text style={styles.textDate}>Today, October 10</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name="calendar-outline" size={18} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.tabContainer}>
          {tabList.map((tabName, tabIndex) => (
            <TouchableOpacity
              style={{margin: 16}}
              key={tabIndex}
              onPress={() => setTab(tabIndex)}>
              <Text
                style={{
                  ...styles.tabItem,
                  color: tab === tabIndex ? '#ADA9BB' : '#5784BA',
                }}>
                {tabName}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {tab === 1 ? <ForYou /> : <AllSchedule />}
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
    fontSize: 14,
  },
  content: {
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tabItem: {
    fontSize: 16,
    fontWeight: '500',
  },
});
