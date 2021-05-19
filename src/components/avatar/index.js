import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

import Img from '../../assets/images/profile.png';

const index = ({image, size, letter}) => {
  const userData = {
    userName: 'bambang',
    image: Img,
  };

  const firstletter = userData.userName[0].toUpperCase();
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const styles = StyleSheet.create({
    container: {
      minHeight: size || 56,
      width: size || 56,
      backgroundColor: '#FFF',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    letter: {
      fontSize: 35,
      fontWeight: 'bold',
      color: randomColor,
    },
  });

  return (
    <View style={styles.container}>
      {userData.image ? (
        <ImageBackground
          source={userData.image}
          imageStyle={{borderRadius: 50}}
          style={{flex: 1, height: '100%', width: '100%'}}
        />
      ) : (
        <View>
          <Text style={styles.letter}>{firstletter}</Text>
        </View>
      )}
    </View>
  );
};

export default index;
