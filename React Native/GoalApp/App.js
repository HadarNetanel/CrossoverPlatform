import React, { useState} from "react";
import { ImageBackground, StyleSheet, View, FlatList} from 'react-native';
import Show from './component/show/Show';
import Input from './component/input/Input';

export default function App() {
const [myGoal, setMyGoals] = useState([]);
const image = { uri: "http://sf.co.ua/14/02/wallpaper-427553.jpg" };

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
const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

  },
  image: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',

  },

  
});


