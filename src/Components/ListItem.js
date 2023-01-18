import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'

const ListItem = ({name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress}) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red';
  return (
    <TouchableOpacity onPress={onPress}>
      <View style = {styles.itemWrapper}>
        <View style = {styles.leftWrapper}>
            <Image source={{uri: logoUrl}} style = {styles.image} />
            <View style={styles.titleWrapper}>
                <Text style = {styles.title}>{name}</Text>
                <Text style = {styles.subtitle}>{symbol.toUpperCase()}</Text>
            </View>
        </View>

        <View style = {styles.rightWrapper}>
        <Text style = {styles.title}>${currentPrice.toLocaleString('en-US',{currency: 'USD'})}</Text>
        <Text style = {[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>

        </View>

      </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'

    },
    itemWrapper :{
        paddingHorizontal: 24,
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        height: 48,
        width: 48,


    },
    leftWrapper:{
        flexDirection: 'row',
        alignItems: 'center',


        
    },
    
    titleWrapper:{
        margin: 8,
    },
    rightWrapper:{

        alignItems: 'flex-end',
    },
    subtitle:{
        marginTop: 5,
        fontSize: 12,
        color: 'grey',
    },
    
})

export default ListItem