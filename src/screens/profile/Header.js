import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import {launchCamera} from 'react-native-image-picker';

import axios from 'axios';
import {URL_API} from '@env';

import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from '../../components/avatar/index';
import Modal from '../../components/modal/index';

const Header = ({authReducer}) => {
  const [user, setUser] = useState('');
  const [image, setImage] = useState({uri: ''});
  const [visible, setVisible] = useState(false);
  const [singleUpload, setSingleUpload] = useState(null);

  const choseFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      return setSingleUpload(res);
    } catch (err) {
      console.log(err);
    }
  };

  const takeFile = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, res => {
      // console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        // console.log('response', JSON.stringify(res));
        return setSingleUpload({
          fileCopyUri: res.uri,
          name: res.fileName,
          size: res.fileSize,
          type: res.type,
          uri: res.uri,
        });
      }
    });
  };

  const uploadImage = () => {
    const id = authReducer.user.data.id;
    if (singleUpload !== null) {
      let fileToUpload = singleUpload;
      const data = new FormData();
      data.append('image', fileToUpload);

      axios
        .patch(`${URL_API}/profile/${id}`, data)
        .then(res => {
          return console.log(res);
        })
        .catch(err => {
          return console.log(err);
        });
    }
  };

  const getUsername = () => {
    return setUser(authReducer.user?.data?.username);
  };

  const getImage = () => {
    return axios
      .get(`${URL_API}${authReducer.user.data.image}`)
      .then(res => {
        // console.log(res);
        return setImage({uri: res.config.url});
      })
      .catch(err => {
        return console.log(err);
      });
  };

  useEffect(() => {
    getUsername();
    getImage();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#5784BA"
      />
      <View>
        <Text style={styles.textTitle}>Profile</Text>
      </View>

      <View style={styles.avatarContainer}>
        <Avatar image={image} letter={authReducer.user?.data?.username} />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{user}</Text>
          <Text style={styles.textStatus}>online</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => setVisible(true)}>
          <Icon name="create-outline" size={16} color="#FFF" />
        </TouchableOpacity>
      </View>

      <Modal visible={visible} onPress={() => setVisible(!visible)}>
        <View style={styles.containerOptionImg}>
          <TouchableOpacity style={styles.optionImgBtn} onPress={choseFile}>
            <Icon name="image" size={15} color="#000" />
            <Text>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionImgBtn} onPress={takeFile}>
            <Icon name="camera" size={15} color="#000" />
            <Text>Camera</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.uploadBtn} onPress={uploadImage}>
            <Text style={{color: '#FFF'}}>Upload</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    authReducer: state.authReducer,
  };
};

const ConnectHeader = connect(mapStateToProps)(Header);

export default ConnectHeader;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#5784BA',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },
  textContainer: {
    marginLeft: 33,
  },
  textName: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFF',
  },
  textStatus: {
    fontSize: 14,
    color: '#FFF',
  },
  containerOptionImg: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  optionImgBtn: {
    alignItems: 'center',
    padding: 5,
    margin: 10,
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
  },
  uploadBtn: {
    padding: 7,
    margin: 5,
    backgroundColor: '#5784BA',
    borderRadius: 5,
  },
});
