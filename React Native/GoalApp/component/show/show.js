import React from "react";
import { StyleSheet, Text, View} from 'react-native';


const Show = props => {
    return (  
      <View style={styles.list}>   
         
     <View style={styles.listItem}>   
      <Text> {props.title}</Text>
     </View> 
     </View> 

    );
};

const styles = StyleSheet.create({
  list:{
    width: '90%',
    height: '80%',
    display:'flex',
  justifyContent: 'space-evenly',
  alignItems:'center',
},
listItem:{
  width: '70%',
  height: '50%',
  padding: 8,
  marginVertical: 10,
  backgroundColor:'white',

}, 

 });
  
  
  
export default Show;

