import React, {useRef} from "react";
import { Animated, View, StyleSheet, Button} from "react-native";

export default function Home() {
    const ballY = useRef(new Animated.Value(0)).curre,


    componentDidMount = () => {
        Animated.timing(ballY, {
            toValue: 500,
            duration: 1000,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Button title="click" onPress={componentDidMount}>
            <Animated.View style={[
                styles.ball,
                {top: ballY}
                ]}/>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    ball: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#F00',
    }
})