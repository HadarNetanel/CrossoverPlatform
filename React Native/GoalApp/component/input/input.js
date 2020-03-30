import React, {useState} from "react";
import { StyleSheet, TextInput, View, Button,} from 'react-native';




const Input = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  
    return (
     
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Goal" 
        style={styles.input} 
        onChangeText={goalInputHandler} 
        value={enteredGoal}/>
        <Button title="Add Goal" onPress={props.onAdd.bind(this, enteredGoal)}/>
      </View> 
    );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',

  },
  input:{
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
backgroundColor:"white"
  },

  });
  
  
  
export default Input;

