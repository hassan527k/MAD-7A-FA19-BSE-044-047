import { StyleSheet, Text, View, SafeAreaView, Piechart } from 'react-native'
import React from 'react'
import Pie from 'react-native-pie'
import NavigationBar from '../../NavigationBar'


const Piechart1 = () => {
  return (
    <View style={styles.homeMain}>
      {/* <View style={styles.top}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>Pie Chart</Text>
      </View> */}
      <View style={styles.sheduledview}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 50, fontWeight: 'bold', marginBottom: 60, marginTop: -50 }}>Market Dominance</Text>
        <View style={{position: 'relative', top: 75}}><Pie
          radius={82}
          innerRadius={40}
          sections={[
            {
              percentage: 40,
              color: '#e8c8f4',
            },
            {
              percentage: 10,
              color: '#8dbefb',
            },
            {
              percentage: 50,
              color: '#fbd270',
            },
          ]}
          dividerSize={1}
          backgroundColor={'black'}
          strokeCap={'butt'}
        /></View>
        
      </View>

      <View style={styles.keyss}>
        <View style={[styles.square,{backgroundColor: '#fbd270'}]}></View>
        <Text style={{marginLeft:-10, color: 'white'}}>Bitcoin</Text>
        <View style={[styles.square,{backgroundColor: '#e8c8f4'}]}></View>
        <Text style={{marginLeft:-10, color: 'white'}}>Ethereum</Text>
        <View style={[styles.square,{backgroundColor: '#8dbefb'}]}></View>
        <Text style={{marginLeft:-10, color: 'white'}}>Others</Text>
      </View>

      {/* <View style={styles.unsheduledview}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 40, marginTop: -50 }}>Non-Sheduled To-Do(s)</Text>
        <Pie
          radius={80}
          innerRadius={30}
          sections={[
            {
              percentage: 30,
              color: '#44CD40',
            },
            {
              percentage: 70,
              color: '#404FCD',
            },
          ]}
          dividerSize={1}
          backgroundColor={'black'}
          strokeCap={'butt'}
        />
      </View> */}

<NavigationBar/>
    </View>
  )
}

export default Piechart1

const styles = StyleSheet.create({
  homeMain:{
    backgroundColor: 'black',
    height: '100%',
},
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    position: 'relative',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#866DFF',
    width: '100%',
    height: 60,
  },
  sheduledview: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingBottom: 150,

  },
  unsheduledview: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#866DFF',
  },
  keyss: {
    backgroundColor: 'black',
    width: '100%',
    flexDirection:'row',
    marginBottom: 125,
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 15,
    marginHorizontal:40
  }

})