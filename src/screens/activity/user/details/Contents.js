import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import CourseIcon from '../../../../assets/images/activity/course.png';
import {Bar} from 'react-native-progress';

import Information from './Information';
import Progress from './Progress';
import Discussion from './Discussion';

const Contents = () => {
  const [tab, setTab] = useState(0);
  const tabList = ['Information', 'Class Progress', 'Class Disscussion'];

  const score = 76;

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <ImageBackground source={CourseIcon} style={{flex: 1}} />
        </View>
        <View style={{...styles.bar, display: tab === 1 ? 'flex' : 'none'}}>
          <Text style={styles.textBar}>{`${score}% to complete`}</Text>
          <Bar progress={score / 100} width={240} color="#5784BA" />
        </View>
      </View>

      <View style={styles.content}>
        {tabList.map((tabItem, index) => (
          <TouchableOpacity
            style={{
              ...styles.btnTab,
              borderBottomWidth: tab === index ? 2 : 0,
              borderColor: '#5784BA',
            }}
            onPress={() => setTab(index)}
            key={index}>
            <Text
              style={{
                ...styles.textTab,
                color: tab === index ? '#5784BA' : '#000',
              }}>
              {tabItem}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{paddingVertical: 16}}>
        {tab === 0 ? (
          <Information />
        ) : tab === 1 ? (
          <Progress />
        ) : (
          <Discussion />
        )}
      </View>
    </View>
  );
};

export default Contents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 22,
    minHeight: 500,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    top: -56,
    marginHorizontal: 16,
  },
  logo: {
    height: 100,
    width: 100,
    marginRight: 16,
  },
  bar: {
    marginBottom: 10,
  },
  textBar: {
    marginBottom: 4,
    fontSize: 12,
    color: '#5784BA',
  },
  content: {
    marginTop: 50,
    flexDirection: 'row',
    borderBottomWidth: 0.4,
    borderColor: '#000',
  },
  btnTab: {
    paddingVertical: 10,
    marginRight: 10,
  },
  textTab: {
    fontSize: 14,
  },
});
