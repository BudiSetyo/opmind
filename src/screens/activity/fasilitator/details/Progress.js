import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Progress = () => {
  const [subCourse, setSubCourse] = useState([
    {
      checked: true,
      subCourse: 'HTML Essential Training',
      subScore: '100',
    },
    {
      checked: true,
      subCourse: 'CSS Essential Training',
      subScore: '42',
    },
    {
      checked: true,
      subCourse: 'Javascript Essential Training',
      subScore: '21',
    },
    {
      checked: true,
      subCourse: 'Responsive Layout',
      subScore: '98',
    },
    {
      checked: false,
      subCourse: 'Sass Essential Training',
      subScore: '',
    },
    {
      checked: true,
      subCourse: 'Javascript Essential Training',
      subScore: '21',
    },
    {
      checked: true,
      subCourse: 'Responsive Layout',
      subScore: '98',
    },
    {
      checked: false,
      subCourse: 'Sass Essential Training',
      subScore: '',
    },
  ]);

  return (
    <View style={styles.container}>
      {subCourse.map((item, index) => (
        <View style={styles.listContainer} key={index}>
          <View style={{flex: 1}}>
            <CheckBox
              disabled={true}
              value={item.checked}
              tintColors={{true: '#5985BB'}}
            />
          </View>
          <View style={{flex: 5}}>
            <Text style={styles.textTitle}>{item.subCourse}</Text>
          </View>
          <View style={{flex: 2, alignItems: 'center'}}>
            {item.subScore ? (
              <Text style={styles.textScore}>{item.subScore}</Text>
            ) : (
              <View style={styles.unfinished}>
                <Text style={{color: '#BA5757'}}>Unfinished</Text>
              </View>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    marginBottom: 70,
    backgroundColor: '#FFF',
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    elevation: 2,
    marginBottom: 2,
  },
  textTitle: {
    fontSize: 16,
  },
  textScore: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#51E62B',
  },
  unfinished: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#EDD2D2',
    borderRadius: 10,
  },
});
