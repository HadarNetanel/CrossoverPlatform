import React, { useState} from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import Show from './component/show/show';
export default function App() {
const [enteredGoal, setEnteredGoal] = useState('');
const [myGoal, setMyGoals] = useState([]);
const image = { uri: "https://leannecalderwood.com/wp-content/uploads/2017/11/goal-setting.jpg" };

const goalInputHandler = (enteredText) => {
  setEnteredGoal(enteredText);
};

const addGoalHandler = () => {
  setMyGoals(currentGoals => [...currentGoals, {id:Math.random().toString(), val: enteredGoal}]);
  console.log(enteredGoal)
};

  return (

    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>

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
      renderItem={itemData => (<Show title={itemData.item.val}/>)}
      />
            </ImageBackground>

      </View> 
       
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    display:'flex',

  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "center",

  },

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


