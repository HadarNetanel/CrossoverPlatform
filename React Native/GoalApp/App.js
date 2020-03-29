import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



export default function App() {
  const [enterGoal, setEnterGoal] = useState=('')

  const goalInputHandler = (enteredText) =>
  setEnterGoal(enteredText)
  return (
    <View style={styles.screen}>
      <View style={styles.inputClass}>
        <TextInput placeholder="Goal" style={styles.input} onChangeText={goalInputHandler} value={enterGoal}/>
        <Button title="Add Goal"/>
      </View> 
      
      <View>  
     
      </View> 
     
     </View>  );
}

const styles = StyleSheet.create({
  screen:{
    padding:40

  },
  inputClass:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    width:'80%',
    borderColor:'black',
    borderWidth:1, padding:10
  }
});


