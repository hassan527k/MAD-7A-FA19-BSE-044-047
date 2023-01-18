import { View, ScrollView, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, TextInput } from 'react-native'
import React, {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../Assets/3.png'
import CustomButton from '../Components/CustomButton/CustomButton'
import CustomInput from '../Components/CustomInputs/CustomInputs'
import background from '../../Assets/1.png'

const SignInScreen = ({navigation}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [email, setEmail] = useState("");
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const FIREBASE_API_ENDPOINT = "https://mad-project-73eae-default-rtdb.asia-southeast1.firebasedatabase.app/"

  const handleSignUp = async () => {

    if (username == "" ) {
      alert("Username Must Not Be Empty ")
    }
    else if (password.length < 5) {
      alert("Password must not be less than 5 characters")
    }
    else if (username.length < 3) {
      alert("Username must not be lower than 3 characters")
    }
    else if (!emailRegex.test(email)) {
      alert('Invalid Email');
    }
    else if (password!=rpassword){
      alert("Passwords Do Not Match!")
    }
    else {

      fetch(`${FIREBASE_API_ENDPOINT}/data.json`, {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        })
      });

      try {
        await AsyncStorage.setItem('@store_username', username)
        await AsyncStorage.setItem('@store_email', email)
        await AsyncStorage.setItem('@store_pass', password)


      } catch (e) {
        alert("Registration failed")
      }

      alert("You are Signed Up!")
      navigation.navigate('SignIn');

    }
  }

  const {height} = useWindowDimensions()

  return (
    
    
    <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.uproot}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.1}]} resizeMode="contain"/>
    </View>
    <ImageBackground source={background} style={[styles.backgroundimage, {height: height * 1}]}>
    <View style={styles.root} >
    
    <TextInput
        defaultValue={username}
        onChangeText={newUser => setUsername(newUser)}
        style={styles.container} 
        placeholder="Username"
        color = "#000000" >

    </TextInput>
    <TextInput 
    style={styles.container}
    placeholder="Email"
    onChangeText={newMail => setEmail(newMail)}
    defaultValue={email}
    color = "#000000"> 
    </TextInput>


    <TextInput secureTextEntry={true}
     style= {styles.container}
      placeholder="Password"
      onChangeText={newPass=> setPassword(newPass)}
      defaultValue={password}
      color = "#000000"
      ></TextInput>

<TextInput secureTextEntry={true}
     style= {styles.container}
      placeholder="Confirm Password"
      onChangeText={newRPass=> setRpassword(newRPass)}
      defaultValue={rpassword}
      color = "#000000"
      ></TextInput>

    <CustomButton type="1" text="SignUp" onPress={handleSignUp}></CustomButton>

<CustomButton type="3" text="Back To Log In"   onPress={() => navigation.navigate('SignIn')}></CustomButton>
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
    height: '15%',
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