import moment from 'moment';
import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Week = () => {
  const data = [
    {
      img: 'logo-amazon',
      text: 'There are 10 news update for today. Don’t miss it!',
      time: moment().startOf('hour').fromNow(),
    },
    {
      img: 'logo-facebook',
      text: 'There are 10 news update for today. Don’t miss it!',
      time: moment().startOf('hour').fromNow(),
    },
    {
      img: 'logo-whatsapp',
      text: 'There are 10 news update for today. Don’t miss it!',
      time: moment().startOf('hour').fromNow(),
    },
    {
      img: 'logo-twitter',
      text: 'There are 10 news update for today. Don’t miss it!',
      time: moment().startOf('hour').fromNow(),
    },
    {
      img: 'logo-youtube',
      text: 'There are 10 news update for today. Don’t miss it!',
      time: moment().startOf('hour').fromNow(),
    },
    {
      img: 'logo-instagram',
      text: 'There are 10 news update for today. Don’t miss it!',
      time: moment().startOf('hour').fromNow(),
    },
  ];
  return (
    <View>
      <ScrollView>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>This Week</Text>
        </View>
        <View>
          {data.map((item, index) => (
            <View key={index} style={styles.notifWrapper}>
              <View style={{flex: 1}}>
                <Icon name={item.img} color="#FFF" size={40} />
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.notifText}>{item.text}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.notifText}>{item.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Week;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 250,
  },
  titleWrapper: {
    marginBottom: 12,
  },
  titleText: {
    fontSize: 16,
    color: '#FFF',
  },
  notifWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  notifText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF',
  },
});
