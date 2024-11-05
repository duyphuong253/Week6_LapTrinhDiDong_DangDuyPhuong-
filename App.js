import React, { useState } from 'react';

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const App = () => {
  const [selected, setSelected] = useState(null);
  const data = [
    {
      id: '1',
      name: 'Ca nấu lẩu, nấu mì mini',
      shop: 'Shop Devang',
      image: require('./assets/ca_nau_lau.png'),
    },
    {
      id: '2',
      name: '1KG KHÔ GÀ BƠ TỎI',
      shop: 'Shop LTD Food',
      image: require('./assets/ga_bo_toi.png'),
    },
    {
      id: '3',
      name: 'Xe cần cẩu đa năng',
      shop: 'Shop Thế giới đồ chơi',
      image: require('./assets/xa_can_cau.png'),
    },
    {
      id: '4',
      name: 'Đồ chơi dạng mô hình',
      shop: 'Shop Thế giới đồ chơi',
      image: require('./assets/do_choi_dang_mo_hinh.png'),
    },
    {
      id: '5',
      name: 'Lãnh đạo giản đơn',
      shop: 'Shop Minh Long Book',
      image: require('./assets/lanh_dao_gian_don.png'),
    },
    {
      id: '6',
      name: 'Hiểu lòng con trẻ',
      shop: 'Shop Minh Long Book',
      image: require('./assets/hieu_long_con_tre.png'),
    },
    {
      id: '7',
      name: 'Donald Trump Thiên tài lãnh đạo',
      shop: 'Shop Donald Trump',
      image: require('./assets/trump_1.png'),
    },
  ];

  const render = ({ item }) => {
    const isSelected = selected === item.id;
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          { backgroundColor: isSelected ? 'white' : '#e5e5e5' },
        ]}
        onPress={() => {
          setSelected(item.id);
        }}>
        <View>{isSelected}</View>
        <View style={{ flex: 1 }}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text>{item.name}</Text>
          <Text>{item.shop}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.chatButton}>
            <Text style={styles.chatBtnTxt}>Chat</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  
  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.nav}>
      <TouchableOpacity style={styles.action}>
      <Image source={require('./assets/vetor.png')} style={{height: 40, width: 40}} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.action}>
        <Text style={{ color: 'white', fontSize: 20 }}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
        <Image source={require('./assets/bi_cart_check.png')}  style={{height: 40, width: 40}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
        <FlatList
          data={data}
          renderItem={render}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSeparatorView}
        />
      </View>
      <View style={styles.nav}>
      <TouchableOpacity style={styles.action}>
        <Image source={require('./assets/menu.png')} style={{height: 40, width: 40, }}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
        <Image source={require('./assets/home.png')} style={{height: 40, width: 40, }}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
        <Image source={require('./assets/back.png')} style={{height: 40, width: 40, }}/> 
       </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  image: {
    width: 74,
    height: 74,
  },
  chatBtnTxt: {
    color: '#FFFFFF',
    width: 31.68,
    height: 12.16,
  },
  chatButton: {
    width: 88,
    height: 38,
    backgroundColor: '#F31111',
    alignItems: 'center',
    paddingTop: '10%',
  },
  textContainer: {
    flexDirection: 'column',
    flex: 2,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  headerText: {
    fontWeight: 600,
    padding: '5% 5%',
  },
  action: {
    flexDirection: 'row',
  },
  nav: {
    backgroundColor: '#1BA9FF',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0% 5%',
  },
});

export default App;