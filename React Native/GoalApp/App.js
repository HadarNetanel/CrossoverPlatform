import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enterGoal], [setEnterGoal] = useState=('')
  return (
    <View style={{padding:40}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <TextInput placeholder="Goal" style={{width:'80%', borderColor:'black', borderWidth:1, padding:10 }}/>
        <Button title="Add Goal"/>
      </View> 
      
      <View>  
     
      </View> 
     
     </View>  );
}

const styles = StyleSheet.create({
});


