import React, { useState} from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';


export default function App() {
const [enteredGoal, setEnteredGoal] = useState('');
const [myGoal, setMyGoals] = useState([]);

const goalInputHandler = (enteredText) => {
  setEnteredGoal(enteredText);
};

const addGoalHandler = () => {
  setMyGoals(currentGoals => [...currentGoals, {id:Math.random().toString(), val: enteredGoal}]);
  console.log(enteredGoal)
};

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        
        <TextInput placeholder="Goal" 
        style={styles.input} 
        onChangeText={goalInputHandler} 
        value={enteredGoal}/>
        
        <Button title="Add Goal" 
        onPress={addGoalHandler}/>
      </View> 
      <FlatList
      keyExtractor={(item,index) => item.id}
      data={myGoal} 
      renderItem={itemData => (
            <View style={styles.listItem}>   
            <Text> {itemData.item.val}</Text>
            </View> 
      )}
      />
            </View> 
       
    );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem:{
    padding: 10,
    marginVertical: 10,
    backgroundColor:'#ccc',
    borderColor:'blck',
    borderWidth: 1,
  },
});


