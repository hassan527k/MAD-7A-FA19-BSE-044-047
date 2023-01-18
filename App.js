//import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Home from './src/Screens/Home';
import SignIn from './src/Screens/SignIn'
import SignUp from './src/Screens/SignUp'
import SplashScreen from './src/Screens/SplashScreen'
import Market from './src/Screens/Market'
import Dominance from './src/Screens/Dominance'
import NavigationBar from './NavigationBar';
import Search from './src/Screens/Search';
import Details from './src/Screens/Details';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          // options={{title: 'Welcome'}}
        /> */}
        
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Market" component={Market} />
        <Stack.Screen name="Dominance" component={Dominance} />
        <Stack.Screen name="NavigationBar" component={NavigationBar} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>


    // <SafeAreaView style={styles.root}>
    //   <Home/>
    // </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1, 
    backgroundColor: '#F9FBFC'
  },
});