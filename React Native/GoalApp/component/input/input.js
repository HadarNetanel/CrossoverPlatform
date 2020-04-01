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
        <Button title="Add Goal" onPress={props.onAdd.bind(this,enteredGoal)}/>
      </View> 
    );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems:'center',

  },
  input:{
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginTop:10,
backgroundColor:'transparent',
justifyContent: 'center',

  },


  });
  
  
  
export default Input;

