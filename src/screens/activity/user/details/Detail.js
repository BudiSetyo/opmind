import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Background from '../../../../assets/images/activity/background.png';

import Header from './Header';
import Content from './Contents';

const Detail = ({navigation}) => {
  const courseData = {
    course: 'Know More Javascript',
    level: 'Beginner',
    category: 'Software',
    price: 'Free',
    score: '',
  };

  return (
    <View style={styles.container}>
      <Header navigation={() => navigation.goBack()} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.bannerContainer}>
          <ImageBackground source={Background} style={{flex: 1}}>
            <View style={styles.bannerContent}>
              <View style={styles.topContent}>
                {courseData.score ? (
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: 'bold',
                      color: '#51E72B',
                    }}>
                    {courseData.score}
                  </Text>
                ) : (
                  <TouchableOpacity style={styles.btnContent}>
                    <Text style={{color: '#FFF'}}>Register</Text>
                  </TouchableOpacity>
                )}
              </View>

              <View style={styles.botContent}>
                <Text style={styles.titleContent}>{courseData.course}</Text>

                <View style={styles.dataContainer}>
                  <Text style={styles.textData}>
                    Level : {courseData.level}
                  </Text>
                  <Text style={styles.textData}>
                    Category : {courseData.category}
                  </Text>
                  <Text style={styles.textData}>
                    Price : {courseData.price}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <Content />
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6EDF6',
  },
  scrollContainer: {
    backgroundColor: '#FFF',
  },
  bannerContainer: {
    minHeight: 221,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(237, 237, 237, 0.7)',
  },
  topContent: {
    alignItems: 'flex-end',
  },
  btnContent: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#57BA61',
    borderRadius: 12,
  },
  botContent: {
    marginLeft: 120,
  },
  titleContent: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textData: {
    fontSize: 12,
    fontWeight: '500',
  },
});
