import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

import Header from './Header';
import Carousel from './Carousel';
import AllSchedule from './AllSchedule';

import FirstNews from '../../assets/images/home/carousel.png';
import SecondNews from '../../assets/images/home/laptop.jpg';

const User = () => {
  const newsData = [
    {
      id: 1,
      title: 'Microsoft try to implement work from home forever',
      image: FirstNews,
    },
    {
      id: 2,
      title: 'New vaccine found for COVID-19',
      image: SecondNews,
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <View style={{padding: 16}}>
          <Carousel data={newsData} />
        </View>
        <AllSchedule />
      </ScrollView>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EDF6',
  },
  content: {
    flex: 1,
  },
});
