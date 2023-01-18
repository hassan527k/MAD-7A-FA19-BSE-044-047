import { View, ScrollView, Text, Image, StyleSheet, useWindowDimensions, ImageBackground } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../Components/CustomButton/CustomButton'
import background from '../../Assets/2.png'

const SignInScreen = ({navigation}) => {

  const {height} = useWindowDimensions()


  return (
    
    
    <ScrollView showsVerticalScrollIndicator={false}>
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
        <View style={styles.titleview}>
        <Text style={styles.title}>YOUR GATEWAY TO CRYPTO</Text>
        </View>
    <View style={styles.root} >
    <CustomButton style={styles.but} type="1" text="Get Started"   onPress={() => navigation.navigate('SignIn')}></CustomButton>
    </View>
    </ImageBackground>
    </ScrollView>
    
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  root: {
    marginTop: '100%',
    alignContent: 'center',
    alignItems: 'center'
  },
  uproot: {
    height: '27%',
    backgroundColor: '#FB4242'
  },
  logo: {
    marginTop: 25,
    width: '100%',
    maxWidth: 500,
    maxHeight: 500,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,

  },
  titleview:{
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
  }
});