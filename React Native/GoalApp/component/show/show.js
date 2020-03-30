import React from "react";
import { StyleSheet, Text, View} from 'react-native';


const Show = props => {
    return (           
     <View style={styles.listItem}>   
      <Text> {props.title}</Text>
     </View> 
    );
};

const styles = StyleSheet.create({
  listItem:{
    width: '70%',
    height: '50%',

    padding: 10,
    marginVertical: 10,
    backgroundColor:'white',
    borderColor:'blck',
    borderWidth: 1,
  },  });
  
  
  
export default Show;

