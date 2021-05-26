import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {URL_API} from '@env';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header';

const Course = ({navigation}) => {
  const [course, setCourse] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const authReducer = useSelector(state => state.authReducer);
  const id = authReducer.user.data?.id;

  const getCourse = () => {
    axios
      .get(`${URL_API}/course/fasilitatorCourse/${id}`)
      .then(res => {
        setPage(res.data.info.page + 1);
        setTotalPage(res.data.info.totalPage);
        return setCourse(res.data.info.result);
      })
      .catch(err => {
        return console.log(err);
      });
  };

  const getMoreCourse = () => {
    axios
      .get(`${URL_API}/course/fasilitatorCourse/${id}?page=${page}&limit=3`)
      .then(res => {
        if (page > totalPage) {
          setPage(2);
        }
        setPage(page + 1);
        return setCourse([...course, ...res.data.info.result]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <View style={styles.container}>
      <Header navigation={() => navigation.goBack()} />
      <ScrollView style={styles.content}>
        <View style={styles.titleContainer}>
          <View style={{flex: 6}}>
            <Text style={styles.titleText}>Class Name</Text>
          </View>
          <View style={{flex: 6}}>
            <Text style={{...styles.titleText, textAlign: 'center'}}>
              Students
            </Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>

        {course.map(course => (
          <View key={course.id} style={styles.courseContainer}>
            <View style={{...styles.courseItem, flex: 6}}>
              <Text>{course.classname}</Text>
            </View>
            <View
              style={{
                ...styles.courseItem,
                alignItems: 'center',
                flex: 6,
                flexDirection: 'row',
              }}>
              <Text style={{marginRight: 5}}>{course.students}</Text>
              <Icon name="person" />
            </View>
            <View style={{...styles.courseItem, alignItems: 'center', flex: 1}}>
              <Icon name="chevron-forward" size={16} color="#000" />
            </View>
          </View>
        ))}

        <View style={styles.loadContainer}>
          <TouchableOpacity
            style={{
              ...styles.loadBtn,
              display: page > totalPage ? 'none' : 'flex',
            }}
            onPress={getMoreCourse}>
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
