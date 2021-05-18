import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import CircleBar from 'react-native-progress-circle';

import Header from './Header';

const Course = ({navigation}) => {
  const courseData = [
    {
      id: 1,
      course: 'Front-end fundamentals',
      progress: '60',
      score: '86',
    },
    {
      id: 2,
      course: 'HTML for Beginners',
      progress: '25',
      score: '71',
    },
    {
      id: 3,
      course: 'History of Europe',
      progress: '69',
      score: '62',
    },
  ];

  return (
    <View style={styles.container}>
      <Header navigation={() => navigation.goBack()} />
      <ScrollView style={styles.content}>
        <View style={styles.titleContainer}>
          <View style={{flex: 6}}>
            <Text style={styles.titleText}>Class Name</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={{...styles.titleText, textAlign: 'center'}}>
              Progress
            </Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={{...styles.titleText, textAlign: 'center'}}>
              Score
            </Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>

        {courseData.map(course => (
          <View key={course.id} style={styles.courseContainer}>
            <View style={{...styles.courseItem, flex: 6}}>
              <Text>{course.course}</Text>
            </View>
            <View style={{...styles.courseItem, alignItems: 'center', flex: 3}}>
              <CircleBar
                percent={Number(course.progress)}
                radius={20}
                borderWidth={3}
                color="#5784BA"
                shadowColor="#E6EDF6"
                bgColor="#fff">
                <Text
                  style={{
                    fontSize: 12,
                    color: '#5784BA',
                  }}>{`${course.progress}%`}</Text>
              </CircleBar>
            </View>
            <View style={{...styles.courseItem, alignItems: 'center', flex: 3}}>
              <Text
                style={{fontSize: 24, fontWeight: 'bold', color: '#51E72B'}}>
                {course.score}
              </Text>
            </View>
            <View style={{...styles.courseItem, alignItems: 'center', flex: 1}}>
              <Icon name="ellipsis-vertical" size={12} color="#D2DEED" />
            </View>
          </View>
        ))}

        <View style={styles.loadContainer}>
          <TouchableOpacity style={styles.loadBtn}>
            <Text style={styles.loadBtnText}>More</Text>
            <Icon name="add-circle-outline" size={16} color="#FFF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EDF6',
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 24,
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
  loadContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  loadBtn: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 10,
    backgroundColor: '#5784BA',
    borderRadius: 5,
  },
  loadBtnText: {
    color: '#FFF',
    marginRight: 5,
    fontSize: 16,
  },
});
