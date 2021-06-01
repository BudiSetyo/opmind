import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const index = ({image, size, letter}) => {
  const capital = letter || 'u';

  const firstletter = capital[0].toUpperCase();
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const styles = StyleSheet.create({
    container: {
      minHeight: size || 56,
      width: size || 56,
      backgroundColor: '#FFF',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.2,
      borderColor: '#000',
    },
    letter: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#5784BA',
    },
  });

  return (
    <View style={styles.container}>
      {image.uri !== '' ? (
        <ImageBackground
          source={image}
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
