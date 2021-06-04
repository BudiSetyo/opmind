import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import {URL_API} from '@env';

import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../../../components/modal/index';

const AddCourse = () => {
  const [classname, setClassname] = useState('');
  const [category, setCategory] = useState(0);
  const [pricing, setPricing] = useState('');
  const [descripton, setDescription] = useState('');
  const [singleUpload, setSingleUpload] = useState(null);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);

  const authReducer = useSelector(state => state.authReducer);
  const userId = authReducer.user?.data?.id;

  const showToast = message => {
    return ToastAndroid.showWithGravity(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
  };

  const choseFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setImage({uri: res.fileCopyUri});
      return setSingleUpload(res);
    } catch (err) {
      console.log(err);
    }
  };

  const addCourse = () => {
    let fileToUpload = singleUpload;
    const data = new FormData();
    if (singleUpload || classname || category || pricing || descripton) {
      data.append('image', fileToUpload);
      data.append('className', classname);
      data.append('day', 1);
      data.append('start_time', '08:00:00');
      data.append('end_time', '10:00:00');
      data.append('category', category);
      data.append('level', 1);
      data.append('pricing', pricing);
      data.append('description', descripton);
    }

    axios
      .post(`${URL_API}/course/${userId}`, data)
      .then(res => {
        return showToast('Success');
      })
      .catch(err => {
        console.log(err);
        return showToast('Failed');
      });
  };

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 17}}>
        <Text style={styles.textTiltle}>Create new class</Text>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.labelInput}>Image :</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.btnImg} onPress={choseFile}>
            <Icon name="image" size={16} color="#000" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 100,
            width: 100,
            marginTop: 20,
            display: image ? 'flex' : 'none',
          }}>
          <ImageBackground
            source={image}
            style={{width: '100%', height: '100%'}}
            imageStyle={{borderRadius: 10}}
          />
        </View>
      </View>

      <View>
        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Class Name :</Text>
          <TextInput
            style={styles.input}
            value={classname}
            onChangeText={e => setClassname(e)}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Categories :</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.btnImg}
              onPress={() => setVisible(true)}>
              <Text>
                {category === 1
                  ? 'Software'
                  : category === 2
                  ? 'History'
                  : category === 3
                  ? 'Math'
                  : category === 4
                  ? 'Science'
                  : category === 5
                  ? 'Finance'
                  : category === 6
                  ? 'Psychology'
                  : 'Category'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Pricing :</Text>
          <TextInput
            style={styles.input}
            value={pricing}
            onChangeText={e => setPricing(e)}
            keyboardType="numeric"
          />
        </View>

        <View style={{...styles.inputWrapper, display: 'none'}}>
          <Text style={styles.labelInput}>Schedule :</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Description :</Text>
          <TextInput
            style={styles.inputArea}
            multiline={true}
            numberOfLines={4}
            value={descripton}
            onChangeText={e => setDescription(e)}
          />
        </View>
      </View>

      <View style={styles.createBtnWrapper}>
        <TouchableOpacity style={styles.createBtn} onPress={addCourse}>
          <Text style={styles.createText}>Create</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={visible} onPress={() => setVisible(!visible)}>
        <View style={{marginBottom: 10}}>
          <TouchableOpacity
            style={styles.btnCategory}
            onPress={() => {
              setCategory(1);
              return setVisible(!visible);
            }}>
            <Text>Software</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 10}}>
          <TouchableOpacity
            style={styles.btnCategory}
            onPress={() => {
              setCategory(2);
              return setVisible(!visible);
            }}>
            <Text>History</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 10}}>
          <TouchableOpacity
            style={styles.btnCategory}
            onPress={() => {
              setCategory(3);
              return setVisible(!visible);
            }}>
            <Text>Math</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 10}}>
          <TouchableOpacity
            style={styles.btnCategory}
            onPress={() => {
              setCategory(4);
              return setVisible(!visible);
            }}>
            <Text>Science</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 10}}>
          <TouchableOpacity
            style={styles.btnCategory}
            onPress={() => {
              setCategory(5);
              return setVisible(!visible);
            }}>
            <Text>Finance</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 10}}>
          <TouchableOpacity
            style={styles.btnCategory}
            onPress={() => {
              setCategory(6);
              return setVisible(!visible);
            }}>
            <Text>Psychology</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  btnImg: {
    marginTop: 7,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
  },
  btnCategory: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#000',
    alignItems: 'center',
  },
});
