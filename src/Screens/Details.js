import { StyleSheet, Text, View, SafeAreaView, Piechart, Image } from 'react-native'
import React from 'react'
import Pie from 'react-native-pie'
import NavigationBar from '../../NavigationBar'


const Details = () => {
  return (
    <View style={styles.homeMain}>
      <Text style={{color: 'white', textAlign: 'center', fontSize: 50, fontWeight: 'bold', position: 'relative', top: 50,}}>Details</Text>
      {/* <Image style={{flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain', position: 'relative', bottom: 25,}} source={require('D:/Uni/MAD Project/Shayan Project/Shayan Project/Mad_Project/Assets/graph.jpg')}/> */}
    
<NavigationBar/>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  homeMain: {
    backgroundColor: 'black',
    height: '100%',
  }

})