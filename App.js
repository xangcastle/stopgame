import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, ScrollView, Image, Alert, Dimensions} from 'react-native';
import Indicator from "./components/Indicator";
import Level from "./components/Level";


const {width, height} = Dimensions.get('window');


export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.country} source={require('./assets/img/usa.png')}/>
                <Indicator
                    image={require('./assets/img/coronap.png')}
                    text={'200'}
                    textStyle={{color: 'yellow'}}/>

                <Indicator image={require('./assets/img/fuego.png')} text={'200'} textStyle={{color: 'orange'}}/>
                <Indicator image={require('./assets/img/corazon.png')} text={'200'} textStyle={{color: 'red'}}/>
            </View>
            <View style={styles.footer}>
                <Indicator image={require('./assets/img/menu1.png')} onPress={() => Alert.alert("Menu 1 pressed")}/>
                <Indicator image={require('./assets/img/libro-magico.png')}
                           onPress={() => Alert.alert("Menu 2 pressed")}/>
                <Indicator image={require('./assets/img/mujer.png')} onPress={() => Alert.alert("Menu 3 pressed")}/>
                <Indicator image={require('./assets/img/shield.png')} onPress={() => Alert.alert("Menu 4 pressed")}/>
                <Indicator image={require('./assets/img/store.png')} onPress={() => Alert.alert("Menu 5 pressed")}/>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <Level text={'Viajes'} level={'5'} />
                    <Level text={'Viajes'} level={'5'} />
                    <Level text={'Viajes'} level={'5'} />
                    <Level text={'Viajes'} level={'5'} />
                    <Level text={'Viajes'} level={'5'} />
                </View>
            </ScrollView>

            <StatusBar style={'light'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    header: {
        position: "absolute",
        top: 0,
        backgroundColor: '#fff',
        height: 70,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 1,
    },
    country: {
        height: 40,
        width: 40,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        backgroundColor: '#fff',
        height: 70,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderTopWidth: 1,
    },
    content: {
        marginVertical: 70,
        backgroundColor: '#4f7c42',
        width: width,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-evenly',
    },
});
