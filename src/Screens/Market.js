import { StyleSheet, Text, View, ImageBackground, useWindowDimensions, Button, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native'
import React, {useRef, useState, useMemo, useEffect} from 'react'
import background from '../../Assets/1.png'
import NavigationBar from '../../NavigationBar'
import ListItem from '../Components/ListItem'
import Chart from '../Components/Chart'
import { SAMPLE_DATA } from '../../Assets/data/sampleData'
// import BottomSheet from "@gorhom/bottom-sheet"
import {
    BottomSheetModal,
    BottomSheetModalProvider,
  } from '@gorhom/bottom-sheet';
import { getMarketData } from '../../services/cryptoService'

const Home = ({navigation}) => {

    const [selectedCoinData, setSelectedCoinData ] = useState(null)
    const [data, setData] = useState([]);

    const bottomSheetModalRef = useRef(null);

    useEffect(() =>{

      const fetchMarketData = async() =>{
        const marketData = await getMarketData();
        setData(marketData);
      }

      fetchMarketData();

    }, [])

  // variables
  const snapPoints = useMemo(() => ['32%'], []);

  const openModal = (item) =>{
    setSelectedCoinData(item);
    bottomSheetModalRef.current?.present();
    
  }
  

  return (
    <BottomSheetModalProvider>

    <View style= {styles.container}>
    <View style={styles.titleWrapper}>
        <Text style ={styles.largeTitle}>Markets</Text>
        </View>

        <View style = {styles.divider}>
            <Text> _________________________________________</Text>
        </View>
        <View>
       
       <FlatList
       keyExtractor={(item)=> item.id}
       data={data}
       renderItem={({item})=>(
        <ListItem 
        name={item.name}
        symbol={item.symbol}
        currentPrice={item.current_price}
        priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
        logoUrl={item.image}
        onPress ={() =>openModal(item)}
        />
       )}
       
       />
        </View>
    </View>

    <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          style = {styles.bottomSheet}
        ><Button title='Back' onPress={() =>bottomSheetModalRef.current?.close()}> </Button>
            {selectedCoinData ?(
              
          <Chart
          currentPrice = {selectedCoinData.current_price}

          
          
          logoUrl= {selectedCoinData.image} 
          name= {selectedCoinData.name} 
          symbol= {selectedCoinData.symbol} 
          priceChangePercentage7d= {selectedCoinData.price_change_percentage_7d_in_currency} 
          sparkline ={selectedCoinData.sparkline_in_7d.price}
          
          />
          )
        :null}
    </BottomSheetModal>

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

    </BottomSheetModalProvider>
    
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
    },

    bottomSheet:{
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: -4
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        
    },

    divider:{
        color: '#A9ABB1',
        marginTop: 5,
        marginHorizontal: 16,

    },

    titleWrapper:{
        marginTop: 40,
        paddingHorizontal: 16,
        color: "white"
    },

    largeTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        color: "white",
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