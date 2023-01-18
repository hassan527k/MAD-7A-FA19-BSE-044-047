import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { VictoryLine } from 'victory-native';
// import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';

const Chart = ({currentPrice, logoUrl, symbol, name, priceChangePercentage7d, sparkline}) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red';
    
  return (
    // <ChartPathProvider>
    <View style={StyleSheet.charWrapper}>

        <View style={styles.titleWrapper}>

            <View style={styles.upperTitle}>

                <View style={styles.upperLeftTitle}>
                    <Image source={{uri: logoUrl}} style={styles.image}/>
                    <Text style={styles.subTitle}>{name}({symbol.toUpperCase()})</Text>
                </View>

                <Text style={styles.subTitle}>7d</Text>

            </View>

            <View style={styles.lowerTitle}>
            <Text style={styles.boldTitle}>${currentPrice}</Text>
            <Text style={[styles.title, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
            </View>
            <VictoryLine
            style={{data: {
                stroke: `${priceChangeColor}`,
                strokeWidth: 2,


            }}} 
            width= {400}
            height ={200}
            data ={sparkline}
            />

        </View>
        
    </View>
    // </ChartPathProvider>
  )
}

const styles = StyleSheet.create({
    charWrapper: {
        margin: 16,
        backgroundColor: "red",
    },
    titleWrapper: {},
    upperTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16

    },
    upperLeftTitle: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    image: {
        height: 24,
        width: 24,
        margin: 4
    },
    subTitle: {
        fontSize: 14,
        color: 'grey'
    },
    lowerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16
    },
    title: {
        fontSize: 14,
    },
    boldTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 16,
        color: 'black'
    },
});

export default Chart