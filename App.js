import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [conteo, setConteo] = useState(0)
  
  const Contar = () => setConteo(conteo + 1)
  const Reiniciar = () => setConteo(0)

  return (
    <View 
          style={styles.container}>
    <View
    style={styles.conteoStyle}>
    <Text style={{fontSize:24}}>
    Conteo:</Text>    
    </View>
       
    <View
    style={styles.conteoContainer}>
    <Text style={styles.conteoText}
    >{conteo}</Text>
    </View>

    <View
    style={styles.controlsContainer}>
    <Button title='Contar'
            onPress={Contar}/>
    <Button title='Reiniciar'
            onPress={Reiniciar}/>
    </View>

    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffff',
    marginVertical: 40,
    marginHorizontal: 16,
  },
  conteoContainer:{
    flex: 0,
    marginVertical: 48,
     borderColor: 'gray',
     borderWidth: 2,
     alignItems: 'center',
     padding: 16,

    },

  conteoStyle: {
    flex: 0,

    fontSize:24,
  },

  conteoText:{
    flex: 0,
    fontSize: 36,
    color: 'red'

  },

  controlsContainer: {
    flex: 0,
    flexDirection:'row',

    justifyContent: 'space-evenly',
  }


});