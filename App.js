// jshint esversion:6

import {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, enteredGoalText,
    ]);
  }


  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        {/* <Text>My 2023 Goal</Text> */}
        <TextInput style={styles.textInput} placeholder='Enter a Goal' 
        onChangeText={goalInputHandler} 
        />
        <Button title='Add goal' onPress={addGoalHandler}
        />
      </View>

      <View style={styles.goalsContainer}>
        { courseGoals.map((goal) => (
          <View key={goal} style={styles.goalItem}>
          <Text style={styles.goalText} >{goal}</Text> 
          </View>
         
          ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   marginBottom: 24,
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '75%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,
  },
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
