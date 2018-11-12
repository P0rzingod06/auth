import React from 'react'
import { Text, TextInput, View } from 'react-native'

const Input = ({label, placeholder, value, onChangeText, secureTextEntry}) => {
    const { inputContainerStyle, textStyle, textInputStyle } = styles;

    return (
        <View style={inputContainerStyle}>
            <Text style={textStyle}>{label}</Text>
            <TextInput style={textInputStyle} 
                       placeholder={placeholder}
                       value={value}
                       onChangeText={onChangeText}
                       secureTextEntry={secureTextEntry}
                       />
        </View>
    )
}
 const styles = {
     inputContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        height: 30
     },
     textStyle: {
        flex: 1,
        justifyContent: 'center'
     },
     textInputStyle: {
         flex:2,
         lineHeight: 20
     }
 }

export { Input }
