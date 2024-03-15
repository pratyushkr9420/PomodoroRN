import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type props = {
    timerCount: number
};

const TimerDisplay : React.FC <props> = ({ timerCount }) => {
    return (
        <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{timerCount/1000}</Text>
        </View>
    )
}

export default TimerDisplay;

const styles = StyleSheet.create({
    timerContainer: {
        marginVertical:50
    },
    timerText: {
        fontSize:60,
        fontWeight:'bold',
        color:'white'
    }
})