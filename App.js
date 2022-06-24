import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={'light'}/>
      <Text style={styles.text}>Bienvenidos</Text>
      <TextInput style={styles.input}/>
      <Button title={'Click me'}/>

      <TouchableOpacity style={{
        backgroundColor: "green",
        padding: 15,
        borderRadius: 15
      }}>
        <Text style={styles.text}>touchable</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <View style={styles.box}>
          <View style={styles.bluebox}/>
        </View>
        <View style={styles.box}/>
        <View style={styles.box}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-evenly',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: "#c7ac15ff",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10
  },
  bluebox: {
    height: 50,
    width: 50,
    backgroundColor: "#389613",
    borderWidth: 2,
    borderColor: "#961313",
  },
  text: {
    color: "#b5c4b1",
    fontSize: 50,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderColor: "green",
    borderWidth: 10
  },
});
