import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontSize:26}}>Welcome To The Book Store !</Text>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image style={{height:250, width:400}} source={{uri:"https://cms.qz.com/wp-content/uploads/2017/01/book.jpg?quality=75&strip=all&w=1600&h=900&crop=1"}} />
        <TouchableOpacity style={styles.BookBtn}>
          <Text style={styles.BookTxt} onPress={() => navigation.navigate('BookList')}>BOOK LISTS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BookBtn}>
          <Text style={styles.BookTxt} onPress={() => navigation.navigate('BookAurthor')}>BOOK AUTHOR</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.BookBtn}>
          <Text style={styles.BookTxt} onPress={() => navigation.navigate('Bookdetails')}>BOOK CATEGORIES</Text>
        </TouchableOpacity> 
      </View>
      <Image style={{height:250, width:400}} source={{uri:"https://nypost.com/wp-content/uploads/sites/2/2019/03/old-library-book.jpg?quality=75&strip=all"}} />  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009999',
  },

  BookBtn:{
    width: "100%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#99ffff",
    borderRadius:10,
  }
});