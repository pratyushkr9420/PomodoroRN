import React, { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';

type props = {
    startTimer: Function,
    stopTimer: Function,
    resetTimer: Function
}

const ButtonsContainer: React.FC<props> = ({ startTimer, stopTimer, resetTimer }) => {
    const [isTimerPlaying, setIsTimerPlaying] = useState(false);
    return (
        <View style={styles.buttonsContainer}>
            {
                !isTimerPlaying ? (
                    <Pressable onPress={() => {
                        startTimer()
                        setIsTimerPlaying((prev) => !prev)
                    }}>
                        <AntDesign name="play" size={70} color="white" />
                    </Pressable>) : (
                    <Pressable onPress={() => {
                        stopTimer()
                        setIsTimerPlaying((prev) => !prev)
                    }}>
                        <AntDesign name="pause" size={70} color="white" />
                    </Pressable>
                )
            }
            <Pressable onPress={() => resetTimer()}>
                <Feather name="refresh-cw" size={70} color="white" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        marginTop: 20,
        flexDirection: 'row',
        gap: 60
    }
})

export default ButtonsContainer;

