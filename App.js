// jshint esversion:6
import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList
 } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }

  function deleteGoalHandler(){
    console.log('DELETE');
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal = {addGoalHandler} />
     <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={ (itemData) => {
        return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler}/> ;
          
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
  
  goalsContainer: {
    flex: 5,
  },
 
});
