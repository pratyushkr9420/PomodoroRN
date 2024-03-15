import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TimerDisplay from './Timer';
const FOCUSED_TIME_IN_MINS = 0.2 * 60 * 1000; 
const BREAK_TIME_IN_MINS = 0.1 * 60 * 1000;
export default function App() {
  const [timerCount,setTimeCount] = useState<number>(FOCUSED_TIME_IN_MINS);
  const [timer,setTimer] = useState<NodeJS.Timer | null>(null);
  const startTimer = () => {
    const rev = setInterval(() => {
      setTimeCount((prev) => prev - 1000);
    },1000);
    setTimer(rev);
  }
  const stopTimer = () => {
    if(timer !== null){
      clearInterval(timer)
    }
  }
  useEffect(() => {
    if(timerCount <= 0){
      setTimeCount(FOCUSED_TIME_IN_MINS);
      clearInterval(timer);
    }
  },[timerCount])
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title='Start Timer' onPress={startTimer}/>
      <Button title='Stop Timer' onPress={stopTimer}/>
      <TimerDisplay timerCount={timerCount}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
