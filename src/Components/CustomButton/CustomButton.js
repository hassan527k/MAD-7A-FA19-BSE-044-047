import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type="1"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text , styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        width: '40%',
        padding: 15,
        marginVertical: 10,

        alignItems: 'center',
        borderRadius: 50,
    },

    container_1:{
        backgroundColor: '#FB4242',
    },

    container_2:{
      borderColor: '#d21404',
      borderWidth: 2,
  },
    container_3:{
      width: '100%',
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
        
    },
    text_3: {
        color: 'gray',
    },
    text_2: {
      color: '#d21404',
  },
})