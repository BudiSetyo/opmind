import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {URL_API} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Background from '../../../../assets/images/activity/background.png';

import Header from './Header';
import Content from './Contents';

const Detail = ({navigation}) => {
  const [id, setId] = useState(null);
  const [course, setCourse] = useState({});

  console.log(course);

  const courseDataDum = {
    course: 'Know More Javascript',
    level: 'Beginner',
    category: 'Software',
    pricing: '50',
    score: '',
  };

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
        // console.log(res.data.result[0]);
        return setCourse(res.data.result[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getId();
    getCourseData();
  }, [id, course]);

  return (
    <View style={styles.container}>
      <Header navigation={() => navigation.goBack()} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.bannerContainer}>
          <ImageBackground source={Background} style={{flex: 1}}>
            <View style={styles.bannerContent}>
              <View style={{...styles.topContent}}>
                {courseDataDum.score ? (
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: 'bold',
                      color: '#51E72B',
                      display: 'none',
                    }}>
                    {courseDataDum.score}
                  </Text>
                ) : (
                  <TouchableOpacity
                    style={{...styles.btnContent, display: 'none'}}>
                    <Text style={{color: '#FFF'}}>Register</Text>
                  </TouchableOpacity>
                )}
              </View>

              <View style={styles.botContent}>
                <Text style={styles.titleContent}>{course?.classname}</Text>

                <View style={styles.dataContainer}>
                  <Text style={styles.textData}>Level : {course?.level}</Text>
                  <Text style={styles.textData}>
                    Category : {course?.category}
                  </Text>
                  <Text style={styles.textData}>
                    Price :{' '}
                    {course?.pricing === 0 ? 'Free' : `$${course?.pricing}`}
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
