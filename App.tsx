import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import TimerDisplay from './components/TimerDisplay';
import ButtonsContainer from './components/ButtonsDisplay';
const fullTimeinMinutes = 40; 
export default function App() {
  const [timerCount,setTimerCount] = useState<number>(fullTimeinMinutes);
  const [timer,setTimer] = useState<NodeJS.Timer|null>(null);
  const [timerCountStr,setTimerCountStr] = useState<String>('');

  const startTimer = () => {
    const stop = setInterval(() => {
      setTimerCount((prev) => prev - (1/60))
    },1000)
    setTimer(stop);
  }

  const stopTimer = () => {
    clearInterval(timer);
  }

  const resetTimer = () => {
    setTimerCount(fullTimeinMinutes);
  }

  useEffect(() => {
    if(timerCount <= 0){
      setTimerCount(fullTimeinMinutes);
      clearInterval(timer);
    }
  },[timerCount])

  useEffect(() => {
    let date = new Date(0);
    date.setSeconds(timerCount * 60);
    let timeString = date.toISOString().substring(11, 19);
    setTimerCountStr(timeString);
  },[timerCount])
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetText}>Welcome to Pomodoro!</Text>
      </View>
      <TimerDisplay timerCount={timerCountStr}/>
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
