import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const AddCourse = () => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 17}}>
        <Text style={styles.textTiltle}>Create new class</Text>
      </View>

      <View>
        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Class Name :</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Categories :</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Pricing :</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Schedule :</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Description :</Text>
          <TextInput
            style={styles.inputArea}
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </View>

      <View style={styles.createBtnWrapper}>
        <TouchableOpacity style={styles.createBtn}>
          <Text style={styles.createText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCourse;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  textTiltle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputWrapper: {
    marginBottom: 5,
  },
  labelInput: {
    marginBottom: 2,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderColor: '#EBEBEB',
    borderRadius: 5,
  },
  inputArea: {
    minHeight: 64,
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: '#EBEBEB',
    borderColor: '#EBEBEB',
    borderRadius: 5,
  },
  createBtnWrapper: {
    alignItems: 'center',
    marginVertical: 24,
  },
  createBtn: {
    minWidth: '100%',
    alignItems: 'center',
    padding: 7,
    backgroundColor: '#57BA61',
    borderRadius: 13,
  },
  createText: {
    fontSize: 16,
    color: '#FFF',
  },
});
