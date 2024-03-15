import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import TimerDisplay from './components/TimerDisplay';
import ButtonsContainer from './components/ButtonsDisplay';
const fullTimeinMins = 0.2 * 60 * 1000; 
export default function App() {
  const [timerCount,setTimerCount] = useState<number>(fullTimeinMins);
  const [timer,setTimer] = useState<NodeJS.Timer|null>(null);

  const startTimer = () => {
    const stop = setInterval(() => {
      setTimerCount((prev) => prev - 1000)
    },1000)
    setTimer(stop);
  }

  const stopTimer = () => {
    clearInterval(timer);
  }

  const resetTimer = () => {
    setTimerCount(fullTimeinMins);
  }

  useEffect(() => {
    if(timerCount <= 0){
      setTimerCount(fullTimeinMins);
      clearInterval(timer);
    }
  },[timerCount])
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetText}>Welcome to Pomodoro!</Text>
      </View>
      <TimerDisplay timerCount={timerCount}/>
      <ButtonsContainer
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetText: {
    color:'white',
    fontWeight:'bold',
    fontSize:22
  }
});
