import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Course = ({navigation}) => {
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

      <View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
            <View style={{flex: 1}}>
              <Icon name="search-outline" size={18} color="#ADA9A9" />
            </View>
            <View style={{flex: 10}}>
              <TextInput placeholder="Quick Search" />
            </View>
          </View>
          <View style={{flex: 2}}>
            <TouchableOpacity style={styles.searchBtn}>
              <Text style={{color: '#FFF'}}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={{marginRight: 5}}>Category</Text>
            <Icon name="chevron-down" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={{marginRight: 5}}>Level</Text>
            <Icon name="chevron-down" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={{marginRight: 5}}>Price</Text>
            <Icon name="chevron-down" />
          </TouchableOpacity>
        </View>
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
            <Text onPress={navigation}>{course.course}</Text>
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

      <View style={styles.loadContainer}>
        <TouchableOpacity style={styles.loadBtn}>
          <Text style={styles.loadBtnText}>More</Text>
          <Icon name="add-circle-outline" size={16} color="#FFF" />
        </TouchableOpacity>
      </View>
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
    marginBottom: 1,
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newCourse: {
    paddingHorizontal: 13,
    marginBottom: 12,
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
  searchContainer: {
    flexDirection: 'row',
  },
  searchInput: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderRightWidth: 0,
    borderColor: '#000',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  searchBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5784BA',
    borderWidth: 0.5,
    borderLeftWidth: 0,
    borderColor: '#000',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  optionContainer: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 16,
    backgroundColor: '#EEEEEE',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  optionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
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
