import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch } from 'react-redux';
import { changeFullTimer } from "../store/timer/timerSlice";
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {
  const durations: Array<number> = [20, 30, 40, 60];
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.backIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Ionicons name="arrow-back" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.menuText}>Set timer in minutes</Text>
      <ScrollView style={styles.scroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'space-evenly',
          gap: 20
        }}
      >
        {
          durations.map((duration, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => dispatch(changeFullTimer(duration))}
            >
              <View style={[styles.durationContainer, styles.shadowProp]}>
                <Text style={styles.durationText}>{duration}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center'
  },
  backIcon: {
    position: 'absolute',
    top: 60,
    left: 20
  },
  menuText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    position: 'absolute',
    top: 300
  },
  scroll: {
    position: 'absolute',
    top: 400,
  },
  durationContainer: {
    backgroundColor: 'white',
    padding: 30,
  },
  durationText: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -5, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});


export default SettingsScreen;