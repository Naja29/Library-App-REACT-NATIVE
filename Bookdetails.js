import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, ScrollView, Image } from 'react-native';
export default function Bookdetails({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Image style={{height:250, width:400}} source={{uri:"https://www.telegraph.co.uk/content/dam/books/2018/06/08/books-fiction_trans_NvBQzQNjv4BqBZbcvutI8UqFscWeOLocK8ZqUGxGI-SpjAtF4fl6ZDo.jpg"}} />
      <Image style={{height:250, width:400}} source={{uri:"https://149349728.v2.pressablecdn.com/wp-content/uploads/2014/09/0_gPO9OKvtAf7pRXuk.jpg"}} />
      <Image style={{height:250, width:400}} source={{uri:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-50-best-books-of-2021-1638561516.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"}} />
      <Image style={{height:250, width:400}} source={{uri:"https://cdn.mos.cms.futurecdn.net/rDX8phAdnmCNGu2C8BH8Me-768-80.jpg"}} />
      <Image style={{height:250, width:400}} source={{uri:"https://www.concordia.ca/cunews/main/stories/2020/12/15/holiday-book-list-great-reads.img.png/1608129557165.jpg"}} />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#009999',
      
    },
});  