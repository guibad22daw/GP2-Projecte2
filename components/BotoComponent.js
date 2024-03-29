import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ViewPropTypes, TextPropTypes } from 'react-native'

const Button = ({ text, buttonCustomStyles, textCustomStyles, onPress, height,width }) => {
    return (
        <TouchableOpacity style={[{ width: width, height: height, borderRadius: 5, position: "relative", justifyContent: "center", alignItems: "center" }, buttonCustomStyles]} onPress={onPress}>
            <Text style={[styles.text, textCustomStyles]} numberOfLines={1}>
                {text}
            </Text>
            <View style={[styles.buttonShadow, { backgroundColor: buttonCustomStyles?.backgroundColor, borderRadius: buttonCustomStyles?.borderRadius }]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonShadow: {
        width: "100%",
        height: 40,
        borderRadius: 5,
        position: "absolute",
        opacity: .4,
        bottom: -3,
        right: -3,
        zIndex: -1
    },
    text: {
        fontWeight: "500",
        padding: 3
    },
})

export default Button