import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Avatar from '../../../../components/avatar/index';

const Member = () => {
  const memberData = [
    {
      id: 1,
      name: 'Deddy Corbuzier',
      image: '',
    },
  ];

  return (
    <View style={styles.container}>
      <Text>Member</Text>
    </View>
  );
};

export default Member;

const styles = StyleSheet.create({
  container: {
    marginVertical: 17,
  },
});
