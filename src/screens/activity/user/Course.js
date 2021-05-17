import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Course = () => {
  const courseData = [
    {
      id: 1,
      course: 'Know more Javascript',
      level: 'Beginner',
      pricing: 'Free',
    },
    {
      id: 2,
      course: 'HTML and CSS to code',
      level: 'Intermediate',
      pricing: '$10',
    },
    {
      id: 3,
      course: 'Indonesian war history',
      level: 'Advance',
      pricing: '$50',
    },
    {
      id: 4,
      course: 'Buddhism and Modern Psychology',
      level: 'Beginner',
      pricing: 'Free',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.newCourse}>
        <Text style={styles.textNewCourse}>New Class</Text>
      </View>

      <View style={styles.titleContainer}>
        <View style={{flex: 6}}>
          <Text style={styles.titleText}>Class Name</Text>
        </View>
        <View style={{flex: 4}}>
          <Text style={styles.titleText}>Level</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.titleText}>Pricing</Text>
        </View>
        <View style={{flex: 3}}>
          <Text></Text>
        </View>
      </View>

      {courseData.map(course => (
        <View key={course.id} style={styles.courseContainer}>
          <View style={{justifyContent: 'center', flex: 6}}>
            <Text>{course.course}</Text>
          </View>
          <View style={{justifyContent: 'center', flex: 4}}>
            <Text>{course.level}</Text>
          </View>
          <View style={{justifyContent: 'center', flex: 3}}>
            <Text>{course.pricing}</Text>
          </View>
          <View style={{justifyContent: 'center', flex: 3}}>
            <TouchableOpacity style={styles.btnRegister}>
              <Text style={{color: '#FFF'}}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 8,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  courseContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 5,
    marginBottom: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newCourse: {
    paddingHorizontal: 13,
  },
  textNewCourse: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnRegister: {
    backgroundColor: '#57BA61',
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
});
