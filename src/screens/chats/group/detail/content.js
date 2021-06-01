import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from '../../../../components/avatar/index';

const content = () => {
  return (
    <View>
      <View style={styles.topContainer}>
        <View>
          <View style={styles.avatarWrapper}>
            <View style={{flex: 2}}>
              <Avatar image={{uri: ''}} size={100} />
            </View>
            <TextInput
              style={{flex: 2.5, fontSize: 24}}
              placeholder="Group name"
            />
          </View>
          <Text>Fill group name and choose optional group profile</Text>
        </View>
      </View>

      <View style={styles.botContainer}>
        <View>
          <Text>Participants 3</Text>
        </View>
        <View style={styles.participantsWrapper}>
          <View>
            <Avatar image={{uri: ''}} size={72} />
          </View>
          <TouchableOpacity>
            <Icon name="add-circle" size={72} color="#CBCBCB" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default content;

const styles = StyleSheet.create({
  topContainer: {
    padding: 24,
    backgroundColor: '#FFF',
  },
  avatarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  botContainer: {
    marginTop: 5,
    paddingHorizontal: 23,
    paddingVertical: 16,
    backgroundColor: '#FFF',
    minHeight: 550,
  },
  participantsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});
