// jshint esversion:6
import { 
    StyleSheet,
    View,
    Text
   } from 'react-native';


function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{props.text}</Text> 
          </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        
      },
      goalText: {
        color: 'white'
      }
});

export default GoalItem;