import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Carousel = ({data}) => {
  const styles = StyleSheet.create({
    wrapper: {
      minHeight: 200,
      height: hp('30%'),
      borderRadius: 20,
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    text: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    textContainer: {
      justifyContent: 'flex-end',
      right: 0,
      left: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      paddingBottom: 35,
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: 20,
    },
  });

  return (
    <Swiper style={styles.wrapper} autoplay={true} autoplayTimeout={5}>
      {data.map(item => (
        <View key={item.id} styles={styles.slide}>
          <ImageBackground
            source={item.image}
            imageStyle={{borderRadius: 20}}
            style={{width: '100%', height: '100%'}}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </ImageBackground>
        </View>
      ))}
    </Swiper>
  );
};

export default Carousel;
