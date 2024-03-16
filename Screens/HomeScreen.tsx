import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import TimerDisplay from '../components/TimerDisplay';
import ButtonsContainer from '../components/ButtonsDisplay';
import { useSelector } from 'react-redux';

export default function HomeScreen({ navigation }) {
  const { fullTime } = useSelector((state) => state.timer);

  useEffect(() => {
    setTimerCount(fullTime);
  }, [])

  useEffect(() => {
    setTimerCount(fullTime);
  }, [fullTime])
  const [timerCount, setTimerCount] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null);
  const [timerCountStr, setTimerCountStr] = useState<String>('');

  const startTimer = () => {
    const stop = setInterval(() => {
      setTimerCount((prev) => prev - (1 / 60))
    }, 1000)
    setTimer(stop);
  }

  const stopTimer = () => {
    clearInterval(timer);
  }

  const resetTimer = () => {
    setTimerCount(fullTime);
  }

  useEffect(() => {
    if (timerCount <= 0) {
      setTimerCount(fullTime);
      clearInterval(timer);
    }
  }, [timerCount])

  useEffect(() => {
    let date = new Date(0);
    date.setSeconds(timerCount * 60);
    let timeString = date.toISOString().substring(11, 19);
    setTimerCountStr(timeString);
  }, [timerCount])
  return (
    <View style={styles.container}>
      <View style={styles.introContainer}>
        <View>
          <Text style={styles.greetText}>My Pomodoro!</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('settings')}>
          <Feather name="settings" size={40} color="white" />
        </Pressable>
      </View>
      <TimerDisplay timerCount={timerCountStr} />
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
  introContainer: {
    position: 'absolute',
    top: 80,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
    paddingHorizontal: 15
  },
  greetText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40
  }
});
