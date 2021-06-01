import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Avatar from '../../../components/avatar/index';

const Content = () => {
  const data = {
    count: 20,
    students: [
      {
        image: {uri: ''},
        name: 'Deddy Corbuzier',
      },
      {
        image: {uri: ''},
        name: 'Raditya Dika',
      },
    ],
  };

  return (
    <View>
      <View>
        <Text>{`Friends ${data.count}`}</Text>
      </View>

      <View style={{marginTop: 8}}>
        {data.students.map((student, index) => (
          <View key={index} style={styles.listContainer}>
            <View style={{flex: 2}}>
              <Avatar image={student.image} size={50} letter={student.name} />
            </View>
            <View style={{flex: 6}}>
              <Text style={{fontSize: 18}}>{student.name}</Text>
            </View>
            <View style={{flex: 1}}>
              <CheckBox tintColors={{true: '#5985BB'}} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
});
