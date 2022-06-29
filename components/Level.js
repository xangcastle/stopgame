import {Text, View, Image, StyleSheet} from "react-native";


export default function Level(props) {
    return (<View style={styles.container}>
        <View style={styles.circle}>
            <Image source={require('../assets/img/duolingo.png')} style={styles.duo}/>
        </View>
        <Text style={styles.title}>{props.text}</Text>
        <View style={styles.levelContainer}>
            <Image source={require('../assets/img/coronap.png')}
                   style={styles.corona}/>
            <Text style={styles.levelText}>{props.level}</Text>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: 100,
        width: 100,
    },
    circle: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    duo: {
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        margin: 25,
        borderRadius: 50,
    },
    levelContainer: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        height: 30,
        width: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    corona: {
        height: 30,
        width: 30,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    levelText: {
        color: 'red',
        fontWeight: 'bold',
    },
});