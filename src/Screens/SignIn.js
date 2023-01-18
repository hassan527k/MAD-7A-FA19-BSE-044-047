import { View, ScrollView, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, TextInput} from 'react-native'
import React, {useState} from 'react'
import Logo from '../../Assets/3.png'
import CustomButton from '../Components/CustomButton/CustomButton'
import CustomInput from '../Components/CustomInputs/CustomInputs'
import background from '../../Assets/1.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {

    if (username == '' || password == '') {
      alert("Please Fill All Fields")
    } else {
      try {
        const emailval = await AsyncStorage.getItem('@store_email')
        const passval = await AsyncStorage.getItem('@store_pass')

        console.log(emailval, passval, username, password)

        if (emailval === username && passval === password) {
          alert("Login Sucessful")
          navigation.navigate('Home');
        }
        else {
          alert("Login failed")
        }
      } catch (e) {
        alert(e)
      }
    }
  }

  const {height} = useWindowDimensions()

  return (
    
    
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.uproot}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>
    </View>
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <View style={styles.root} >

    <TextInput
        defaultValue={username}
        onChangeText={newUser => setUsername(newUser)}
        style={styles.container} 
        placeholder="Username"
        color = "#000000">

    </TextInput>

    <TextInput
        defaultValue={password}
        onChangeText={newpass => setPassword(newpass)}
        style={styles.container} 
        secureTextEntry={true}
        placeholder="Password"
        color = "#000000">

    </TextInput>

    <CustomButton type="1" text="Sign In" onPress={handleLogin}></CustomButton>
    <CustomButton type="3" text="Don't have an account? Create One"   onPress={() => navigation.navigate('SignUp')}></CustomButton>
    </View>
    </ImageBackground>
    </ScrollView>
    
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 10, 
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
});