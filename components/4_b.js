import React, { useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native'; // Include Image and StyleSheet

const App = () => {
  const [selected, setSelected] = useState(null);
  const data = [
    {
      image: require('../assets/hinh1.png'),
      id: '1',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      count: '(15)',
      price: '69,900',
      rating: 4.0,
      discount: '-39%',
    },
     {
      image: require('../assets/hinh2.png'),
      id: '2',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      count: '(15)',
      price: '69,900',
      rating: 4.0,
       discount: '-39%',
    },
     {
      image: require('../assets/hinh3.png'),
      id: '3',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      count: '(15)',
      price: '69,900',
      rating: 4.0,
       discount: '-39%',
    },
     {
      image: require('../assets/hinh4.png'),
      id: '4',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      count: '(15)',
      price: '69,900',
      rating: 4.0,
       discount: '-39%',
    },
     {
      image: require('../assets/hinh5.png'),
      id: '5',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      count: '(15)',
      price: '69,900',
      rating: 4.0,
      discount: '-39%',
    },
     {
      image: require('../assets/hinh6.png'),
      id: '6',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      count: '(15)',
      price: '69,900',
      rating: 4.0,
      discount: '-39%',
    },

  ];

  const render = ({ item }) => {
    const isSelected = selected === item.id;
    const filledStars = '★'.repeat(Math.floor(item.rating));
    const emptyStars = '☆'.repeat(5 - Math.floor(item.rating)); 
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          { backgroundColor: isSelected ? 'white' : '#e5e5e5' },
          
        ]}
        onPress={() => {
          setSelected(item.id);
        }}
       activeOpacity={0.7}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text>{item.name}</Text>
          <Text style={styles.star}>
          {filledStars}{emptyStars}  {item.count}</Text> 
          <Text style={styles.price}>{item.price} {item.discount}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }} />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.action}>
          <Image source={require('../assets/vetor.png')} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <View style={styles.searchBar}>
            <Text style={{flex: 1 }}>Dây cáp usb</Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity style={styles.action}>
          <Image source={require('../assets/bi_cart_check.png')} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Image source={require('../assets/3_cham.png')} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={render}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ItemSeparatorComponent={ItemSeparatorView}
        />
      </View>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.action}>
          <Image source={require('../assets/menu.png')} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Image source={require('../assets/home.png')} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Image source={require('../assets/back.png')} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   nav: {
    backgroundColor:'#1BA9FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  action: {
     color:'#1BA9FF',
    padding: 10,
  },
  itemContainer: {
    
    padding: 10,
    flex: 1, // Đảm bảo mục trong FlatList chiếm đều diện tích theo cột
    margin: 5, // Khoảng cách giữa các mục
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: 10,
  },
  searchBar: {
    height: 40,
    width: '100%',
    backgroundColor: '#eee',
    justifyContent: 'center',
    padding: 5,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  star:{
    color: 'orange',
  },
  price:{
    fontWeight: 'bold',

  }
});

export default App;
