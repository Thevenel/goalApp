// jshint esversion:6
import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
 } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  
  function startAddGoalHandler () {
    setModalIsVisible(true);
  }
  function endAddGoalHander() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHander();
  }

  function deleteGoalHandler(id){
    setCourseGoals(( currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id );
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#945bdf'
        onPress={startAddGoalHandler}
      />
      <GoalInput showModal={modalIsVisible} 
      onAddGoal = {addGoalHandler} 
      onCancel={endAddGoalHander}/>
     <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={ (itemData) => {
        return <GoalItem 
          text={itemData.item.text}
          id = {itemData.item.id}
          onDeleteItem={deleteGoalHandler}/> ;
          
      }}
      keyExtractor ={ (item, index) => {
        return item.id;
      }}
      alwaysBounceVertical={false} 

      />    
      </View>

    </View>
    </>
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
