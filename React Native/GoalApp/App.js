import React, { useState} from "react";
import { ImageBackground, StyleSheet, View, FlatList} from 'react-native';
import Show from './component/show/Show';
import Input from './component/input/Input';

export default function App() {
const [myGoal, setMyGoals] = useState([]);
const image = { uri: "https://leannecalderwood.com/wp-content/uploads/2017/11/goal-setting.jpg" };

const addGoalHandler = goalTitle => {
  setMyGoals(currentGoals => [
    ...currentGoals,
  {id: Math.random().toString(), val: goalTitle }
]);
};

  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Input onAdd={addGoalHandler}/>
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

  
});


