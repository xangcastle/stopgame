import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";


export default function Indicator(props) {
    return (
        <TouchableOpacity style={styles.indicator} onPress={props.onPress}>
            {props.image && <Image source={props.image} style={styles.indicatorImage}/>}
            {props.text && props.textStyle && <Text style={[styles.indicatorText, props.textStyle]}>{props.text}</Text>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    indicator: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    indicatorText: {
        color: "#b5c4b1",
        fontSize: 20,
        fontWeight: "bold"
    },
    indicatorImage: {
        height: 40,
        width: 40,
    },
});