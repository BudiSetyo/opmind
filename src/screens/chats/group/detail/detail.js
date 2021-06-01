import React from 'react';
import {View, ScrollView, Text} from 'react-native';

import Header from './header';
import Content from './content';

const detail = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <Content />
      </ScrollView>
    </View>
  );
};

export default detail;
