import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {useSelector} from 'react-redux';
import NotifService from '../../../../NotifService';

import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../../../components/modal/index';

import {URL_API} from '@env';

const Course = ({navigation}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [search, setSearch] = useState('');

  const [filter, setFilter] = useState('');
  const [filterItem, setFilterItem] = useState('');

  const [visible, setVisible] = useState(false);
  const [tabLevel, setTabLevel] = useState(0);

  const [visibleSort, setVisibleSort] = useState(false);
  const [sort, setSort] = useState('');
  const [tabSort, setTabSort] = useState(0);

  const authReducer = useSelector(state => state.authReducer);
  const idUser = authReducer.user?.data?.id;

  const filterByLevel = ['', 'Beginner', 'Intermediate', 'Advance'];

  const sortItem = ['', 'Id - AZ', 'Id - ZA', 'Pricing - AZ', 'Pricing - ZA'];

  const showToast = message => {
    return ToastAndroid.showWithGravity(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
  };

  const getData = () => {
    axios
      .get(`${URL_API}/course/?search=&category&level&pricing&sort`)
      .then(res => {
        setPage(res.data.info.page + 1);
        setTotalPage(res.data.info.totalPage);
        return setData(res.data.info.result);
        // return console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getMoreData = () => {
    axios
      .get(
        `${URL_API}/course/?search=%${search}%&${filter}=${filterItem}&sort=${sort}&page=${page}&limit=5`,
      )
      .then(res => {
        console.log(res.data.info);
        if (page > totalPage) {
          setPage(2);
        }
        setPage(page + 1);
        return setData([...data, ...res.data.info.result]);
      })
      .catch(err => {
        return console.log(err);
      });
  };

  const searchData = () => {
    axios
      .get(`${URL_API}/course/?search=%${search}%`)
      .then(res => {
        if (page > totalPage) {
          setPage(2);
        }
        setTotalPage(res.data.info.totalPage);
        return setData(res.data.info.result);
      })
      .catch(err => console.log(err));
  };

  const getFilterData = () => {
    axios
      .get(
        `${URL_API}/course/?search=%${search}%&${filter}=${filterItem}&sort=${sort}`,
      )
      .then(res => {
        console.log(res.data.info);
        if (page > totalPage) {
          setPage(2);
        }
        setTotalPage(res.data.info.totalPage);
        setData(res.data.info.result);
        return setVisible(!visible);
      })
      .catch(err => console.log(err));
  };

  const getSortData = () => {
    axios
      .get(
        `${URL_API}/course/?search=%${search}%&${filter}=${filterItem}&sort=${sort}`,
      )
      .then(res => {
        if (page > totalPage) {
          setPage(2);
        }
        setTotalPage(res.data.info.totalPage);
        setData(res.data.info.result);
        return setVisibleSort(!visibleSort);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const notif = new NotifService();

  const registerCourse = idCourse => {
    axios
      .post(`${URL_API}/course/${idUser}/register?idClass=${idCourse}`)
      .then(res => {
        return notif.localNotif(
          'Success registered class',
          'Open your dashboard and check your schedule',
        );
      })
      .catch(err => {
        return showToast(err.response.data.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.newCourse}>
        <Text style={styles.textNewCourse}>New Class</Text>
      </View>

      <View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
            <View style={{flex: 1}}>
              <Icon name="search-outline" size={18} color="#ADA9A9" />
            </View>
            <View style={{flex: 10}}>
              <TextInput
                placeholder="Quick Search"
                value={search}
                onChangeText={e => setSearch(e)}
              />
            </View>
          </View>
          <View style={{flex: 2}}>
            <TouchableOpacity style={styles.searchBtn} onPress={searchData}>
              <Text style={{color: '#FFF'}}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={styles.optionBtn}
            onPress={() => setVisible(true)}>
            <Text style={{marginRight: 5}}>Filter</Text>
            <Icon name="chevron-down" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionBtn}
            onPress={() => setVisibleSort(true)}>
            <Text style={{marginRight: 5}}>Sort</Text>
            <Icon name="chevron-down" />
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={visible} onPress={() => setVisible(!visible)}>
        <View>
          <Text style={{marginLeft: 40}}>By Level :</Text>

          {filterByLevel.map((level, index) => (
            <View key={index}>
              <TouchableOpacity
                key={index}
                style={{
                  ...styles.filterBtn,
                  display: index === 0 ? 'none' : 'flex',
                  backgroundColor:
                    tabLevel === index ? '#5784BA' : 'transparent',
                  borderColor: tabLevel === index ? '#5784BA' : '#000',
                }}
                onPress={() => {
                  setTabLevel(index);
                  switch (level) {
                    case 'Beginner':
                      setFilter('level');
                      setFilterItem('beginner');
                      return;
                    case 'Intermediate':
                      setFilter('level');
                      setFilterItem('intermediate');
                      return;
                    case 'Advance':
                      setFilter('level');
                      setFilterItem('advance');
                      return;
                  }
                }}>
                <Text style={{color: tabLevel === index ? '#FFF' : '#000'}}>
                  {level}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View>
          <TouchableOpacity
            style={{...styles.filterBtn, marginTop: 20}}
            onPress={() => {
              setTabLevel(0);
              setFilterItem('');
              return;
            }}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.confirmFilterBtn}
            onPress={getFilterData}>
            <Text style={{color: '#FFF'}}>confirm</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={visibleSort} onPress={() => setVisibleSort(!visibleSort)}>
        <View>
          {sortItem.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                style={{
                  ...styles.filterBtn,
                  display: index === 0 ? 'none' : 'flex',
                  backgroundColor:
                    tabSort === index ? '#5784BA' : 'transparent',
                  borderColor: tabSort === index ? '#5784BA' : '#000',
                }}
                onPress={() => {
                  setTabSort(index);
                  switch (item) {
                    case 'Id - AZ':
                      setSort('id-az');
                      return;
                    case 'Id - ZA':
                      setSort('id-za');
                      return;
                    case 'Pricing - AZ':
                      setSort('pricing-az');
                      return;
                    case 'Pricing - ZA':
                      setSort('pricing-za');
                      return;
                  }
                }}>
                <Text style={{color: tabSort === index ? '#FFF' : '#000'}}>
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View>
          <TouchableOpacity
            style={{...styles.filterBtn, marginTop: 20}}
            onPress={() => {
              setSort('');
              setTabSort(0);
              return;
            }}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.confirmFilterBtn}
            onPress={getSortData}>
            <Text style={{color: '#FFF'}}>confirm</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.titleContainer}>
        <View style={{flex: 6}}>
          <Text style={styles.titleText}>Class Name</Text>
        </View>
        <View style={{flex: 4}}>
          <Text style={styles.titleText}>Level</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={styles.titleText}>Pricing</Text>
        </View>
        <View style={{flex: 3}}>
          <Text></Text>
        </View>
      </View>

      {data.map(course => (
        <View key={course.id} style={styles.courseContainer}>
          <View style={{justifyContent: 'center', flex: 6}}>
            <Text onPress={navigation}>{course.className}</Text>
          </View>
          <View style={{justifyContent: 'center', flex: 4}}>
            <Text>{course.level}</Text>
          </View>
          <View style={{justifyContent: 'center', flex: 3}}>
            <Text>{course.pricing === 0 ? 'Free' : `$${course.pricing}`}</Text>
          </View>
          <View style={{justifyContent: 'center', flex: 3}}>
            <TouchableOpacity
              style={styles.btnRegister}
              onPress={() => registerCourse(course.id)}>
              <Text style={{color: '#FFF'}}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View style={styles.loadContainer}>
        <TouchableOpacity
          onPress={getMoreData}
          style={{
            ...styles.loadBtn,
            display: page > totalPage ? 'none' : 'flex',
          }}>
          <Text style={styles.loadBtnText}>More</Text>
          <Icon name="add-circle-outline" size={16} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 8,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  courseContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 1,
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newCourse: {
    paddingHorizontal: 13,
    marginBottom: 12,
  },
  textNewCourse: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnRegister: {
    backgroundColor: '#57BA61',
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  searchInput: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderRightWidth: 0,
    borderColor: '#000',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  searchBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5784BA',
    borderWidth: 0.5,
    borderLeftWidth: 0,
    borderColor: '#000',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  optionContainer: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 16,
    backgroundColor: '#EEEEEE',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  optionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  loadContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  loadBtn: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 10,
    backgroundColor: '#5784BA',
    borderRadius: 5,
  },
  loadBtnText: {
    color: '#FFF',
    marginRight: 5,
    fontSize: 16,
  },
  filterBtn: {
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 40,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    borderRadius: 10,
  },
  confirmFilterBtn: {
    padding: 5,
    marginHorizontal: 40,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#5784BA',
  },
});
