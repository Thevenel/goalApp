// jshint esversion:6

import {useState} from 'react';
import { 
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList
 } from 'react-native';
import GoalItem from './components/GoalItem';


export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }

  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        {/* { <Text>My 2023 Goal</Text> } */}
        <TextInput style={styles.textInput} placeholder='Enter a Goal' 
        onChangeText={goalInputHandler} 
        />
        <Button title='Add goal' onPress={addGoalHandler}
        />
      </View>

      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={ (itemData) => {
        return <GoalItem text={itemData.item.text}/> ;
          
      }}
      keyExtractor ={ (item, index) => {
        return item.id;
      }}
      alwaysBounceVertical={false} 

      />    
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
 
});
