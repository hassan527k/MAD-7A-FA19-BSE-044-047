import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput secureTextEntry={secureTextEntry} onChangeText={setValue} value={value} style={styles.input} placeholder={placeholder}></TextInput>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 10,
        
    },
    input: {},

})