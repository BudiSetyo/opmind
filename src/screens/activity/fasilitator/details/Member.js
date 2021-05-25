import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Avatar from '../../../../components/avatar/index';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../../../../components/modal/index';

const Member = () => {
  const [visible, setVisible] = useState(false);

  const memberData = [
    {
      id: 1,
      name: 'Deddy Corbuzier',
      image: {uri: ''},
    },
    {
      id: 2,
      name: 'Eden Hazard',
      image: {uri: ''},
    },
    {
      id: 3,
      name: 'Isyana Sarasvati',
      image: {uri: ''},
    },
  ];

  const memberInfo = {
    image: {uri: ''},
    name: 'Deddy Corbuzier',
    course: [
      {
        courseName: 'HTML Essential Training',
        score: '78',
      },
      {
        courseName: 'CSS Essential Training',
        score: '90',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View>
        {memberData.map(data => (
          <TouchableOpacity
            key={data.id}
            style={styles.memberContainer}
            onPress={() => setVisible(true)}>
            <View style={{flex: 2}}>
              <Avatar image={data.image} size={46} letter={data.name} />
            </View>

            <View style={{flex: 6}}>
              <Text style={{fontSize: 18}}>{data.name}</Text>
            </View>

            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Icon name="ellipsis-vertical" size={18} color="#000" />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        visible={visible}
        childrenBorder={false}
        onPress={() => setVisible(!visible)}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <Avatar image={memberInfo.image} size={46} letter={memberInfo.name} />
          <View style={{marginLeft: 20}}>
            <Text>{memberInfo.name}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginBottom: 12,
            borderBottomWidth: 1,
            borderColor: '#000',
            paddingHorizontal: 10,
            paddingBottom: 5,
          }}>
          <View style={{flex: 8}}>
            <Text>Topic</Text>
          </View>

          <View style={{flex: 2, alignItems: 'flex-end'}}>
            <Text>Score</Text>
          </View>
        </View>

        {memberInfo.course.map((item, index) => (
          <View key={index} style={{flexDirection: 'row', marginBottom: 24}}>
            <View style={{flex: 8}}>
              <Text>{item.courseName}</Text>
            </View>

            <View style={{flex: 2, alignItems: 'center'}}>
              <Text>{item.score}</Text>
            </View>
          </View>
        ))}
      </Modal>
    </View>
  );
};

export default Member;

const styles = StyleSheet.create({
  container: {
    marginVertical: 17,
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
