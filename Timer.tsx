import { Text, View } from "react-native";

type Props = {
    timerCount: number
};

const TimerDisplay : React.FC <Props> = ({ timerCount}) => {
    return (
        <View>
            <Text>{timerCount/1000}</Text>
        </View>
    )
}

export default TimerDisplay;