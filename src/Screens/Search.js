import React, { useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import NavigationBar from '../../NavigationBar';
import Market from './Market';

const Search = ({navigation}) => {
  return (
    <View style={styles.parentView}>
        <View style={styles.search}>
            <TextInput style={styles.searchInput}/>
            <TouchableOpacity>
        <Text style={{color: 'white', fontWeight: '800', fontSize: 17}}>Search</Text>
      </TouchableOpacity>
        </View>
        <Market />
        <View style={styles.bar}>
                <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
                    <Text style={{color: 'white', fontWeight: '800', fontSize: 17}} >Home</Text>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => navigation.navigate('Search')}>
                    <Text style={{color: 'white', fontWeight: '800', fontSize: 17}}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity   onPress={() => navigation.navigate('Market')}>
                    <Text style={{color: 'white', fontWeight: '800', fontSize: 17}}>Market</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <Text style={{color: 'white', fontWeight: '800', fontSize: 17}}>Stats</Text>
                </TouchableOpacity> */}
                <TouchableOpacity   onPress={() => navigation.navigate('SplashScreen')}>
                    <Text style={{color: 'white', fontWeight: '800', fontSize: 17}}>Account</Text>
                </TouchableOpacity>
            </View>


    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
    parentView: {
        backgroundColor: 'black',
        height: '100%',
    },

    search: {
        backgroundColor: '#FB4242',
        paddingHorizontal: 15,
        height: 75,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 2,

    },

    searchInput: {
        backgroundColor: 'white',
        width: 275,
        height: 50,
        borderRadius: 200,
        paddingLeft: 20,
    },

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