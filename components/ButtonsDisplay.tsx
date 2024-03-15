import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';

type props = {
    startTimer:Function,
    stopTimer:Function,
    resetTimer:Function
}

const ButtonsContainer : React.FC <props> = ({ startTimer, stopTimer, resetTimer}) => {
    return (
        <View style={styles.buttonsContainer}>
            <Pressable onPress={() => startTimer()}>
                <AntDesign name="play" size={50} color="white" />
            </Pressable>
            <Pressable onPress={() => stopTimer()}>
                <AntDesign name="pause" size={50} color="white" />
            </Pressable>
            <Pressable onPress={() => resetTimer()}>
                <Feather name="refresh-cw" size={50} color="white" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        marginTop:20,
        flexDirection:'row',
        gap: 30
      }
})

export default ButtonsContainer;

