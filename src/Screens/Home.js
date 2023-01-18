import { StyleSheet, Text, View, Button, useWindowDimensions, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import background from '../../Assets/1.png'
import NavigationBar from '../../NavigationBar'

const Home = ({navigation}) => {
    const {height} = useWindowDimensions()
  return (
    
    <View style={styles.homeMain}>
        <ImageBackground source={background} style={[styles.backgroundimage, {height: height}]}>
       <View style={styles.buttonView}>
       
            <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Market')}>
                <Text style={{color: 'white', fontWeight: '500', fontSize: 27}}>Explore</Text>
            </TouchableOpacity>
            
            <View style={styles.twoButtons}>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={{color: 'black', paddingLeft: 20, fontWeight: '500', fontSize: 20, paddingTop: 0}}>Bitcoin</Text>
                    <Text style={{color: 'black', paddingLeft: 20, fontWeight: '500', fontSize: 16, paddingTop: 0}}>BTC</Text>
                    <Text style={{color: 'black', paddingLeft: 30, fontWeight: '500', fontSize: 18, paddingTop: 5}}>$19461</Text>
                    <Text style={{color: 'green', fontSize: 14, fontWeight: '500', paddingLeft: 30, paddingTop: 2, }}>+7.372%</Text>
                    

                </TouchableOpacity>

                <TouchableOpacity style={[styles.saveButton, {marginTop: 10}]}>
                    <Text style={{color: 'black', paddingLeft: 20, fontWeight: '500', fontSize: 20, paddingTop: 0}}>Etherium</Text>
                    <Text style={{color: 'black', paddingLeft: 20, fontWeight: '500', fontSize: 16, paddingTop: 0}}>ETH</Text>
                    <Text style={{color: 'black', paddingLeft: 30, fontWeight: '500', fontSize: 18, paddingTop: 5}}>$13384</Text>
                    <Text style={{color: 'green', fontSize: 14, fontWeight: '500', paddingLeft: 30, paddingTop: 2, }}>+4.8492%</Text>
                </TouchableOpacity>
            </View>
            
         </View>
         

        



            <Text style={{fontSize: 23, color: 'white', paddingLeft: 25, paddingTop: 20, fontWeight: 'bold'}}>Top Cryptocurrencies</Text>


<ScrollView>           
            <View style={styles.recentSection}>

                <View style={styles.recentUpload}>
                    <Text style={{color: '#555555', fontSize: 17, fontWeight: 'bold', paddingLeft: 20, paddingTop: 13, }}>AVAX</Text>
                    <Text style={{color: 'green', fontSize: 13, fontWeight: '500', paddingLeft: 20, paddingRight: 20, paddingTop: 5, }}>+2.114%</Text>
                    <View style={{flexDirection: 'row', paddingTop: 10,}}>
                        <Text style={{color: 'grey', opacity: 0.6,  fontSize: 13, fontWeight: '500', paddingLeft: 20, paddingRight: 20, paddingTop: 5, }}>$40023</Text>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={{textAlign: 'center', paddingTop: 8, fontSize: 12, fontWeight: 'bold', color: 'white'}}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.recentUpload}>
                    <Text style={{color: '#555555', fontSize: 17, fontWeight: 'bold', paddingLeft: 20, paddingTop: 13, }}>BNB</Text>
                    <Text style={{color: 'red', fontSize: 13, fontWeight: '500', paddingLeft: 20, paddingRight: 20, paddingTop: 5, }}>-1.591%</Text>
                    <View style={{flexDirection: 'row', paddingTop: 10,}}>
                        <Text style={{color: 'grey', opacity: 0.6,  fontSize: 13, fontWeight: '500', paddingLeft: 20, paddingRight: 20, paddingTop: 5, }}>$30400</Text>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={{textAlign: 'center', paddingTop: 8, fontSize: 12, fontWeight: 'bold', color: 'white'}}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.recentUpload}>
                    <Text style={{color: '#555555', fontSize: 17, fontWeight: 'bold', paddingLeft: 20, paddingTop: 13, }}>LTC</Text>
                    <Text style={{color: 'green', fontSize: 13, fontWeight: '500', paddingLeft: 20, paddingRight: 20, paddingTop: 5, }}>+0.78%</Text>
                    <View style={{flexDirection: 'row', paddingTop: 10,}}>
                        <Text style={{color: 'grey', opacity: 0.6,  fontSize: 13, fontWeight: '500', paddingLeft: 20, paddingRight: 20, paddingTop: 5, }}>$21300</Text>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={{textAlign: 'center', paddingTop: 8, fontSize: 12, fontWeight: 'bold', color: 'white'}}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.recentUpload}>
                    <Text style={{color: '#555555', fontSize: 17, fontWeight: 'bold', paddingLeft: 20, paddingTop: 13, }}>Bitcoin</Text>
                    <Text style={{color: 'green', fontSize: 13, fontWeight: '500', paddingLeft: 20, paddingRight: 20, paddingTop: 5, }}>+5.114%</Text>
                    <View style={{flexDirection: 'row', paddingTop: 10,}}>
                        <Text style={{color: 'grey', opacity: 0.6,  fontSize: 13, fontWeight: '500', paddingLeft: 20, paddingRight: 20, paddingTop: 5, }}>$40023</Text>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={{textAlign: 'center', paddingTop: 8, fontSize: 12, fontWeight: 'bold', color: 'white'}}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>




            </View>

            </ScrollView>
            </ImageBackground>

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
  )
}

export default Home

const styles = StyleSheet.create({
    homeMain:{
        backgroundColor: 'white',
        height: '100%',
    },
    createButton:{
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 20,
    

        backgroundColor: '#FB4242',
        height: 270,
        paddingTop: 20,
        paddingLeft: 25,
        width: 170,
        borderRadius: 20,
    },  
    buttonView:{
        flexDirection: 'row',
        height: 250,
        marginTop: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'none',

        // borderColor: 'black',
        // borderWidth: 1,
    },  
    twoButtons:{
        marginLeft: 10,
    },  
    saveButton:{
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,

        height: 130,
        width: 135,
        borderRadius: 20,
        backgroundColor: 'white',
        paddingTop: 20,

    },

    recentSection:{
        // height: 220,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 80,
    },  
    recentUpload:{
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 3,

        height: 120,
        backgroundColor: '#F5F5F5',
        width: 230,
        borderRadius: 20,
        marginTop: 10,

    },  
    editButton:{
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,

        height: 35,
        width: 70,
        borderRadius: 50,
        marginLeft: 50,
        
        backgroundColor: '#FB4242',
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
})