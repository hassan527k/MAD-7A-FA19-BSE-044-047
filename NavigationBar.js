import React, { useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NavigationBar = ({navigation}) => {
  return (
    <View style={styles.bar}>
      <TouchableOpacity  onPress={() => navigation.navigate('Market')}>
        <Text style={{color: 'white', fontWeight: '800', fontSize: 17}} >Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{color: 'white', fontWeight: '800', fontSize: 17}}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{color: 'white', fontWeight: '800', fontSize: 17}}>Market</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Text style={{color: 'white', fontWeight: '800', fontSize: 17}}>Stats</Text>
      </TouchableOpacity> */}
      <TouchableOpacity>
        <Text style={{color: 'white', fontWeight: '800', fontSize: 17}}>Account</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NavigationBar;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#FB4242',
    width: '100%',
    height: 75,
    position: 'absolute',
    top: 755,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10
  }

});