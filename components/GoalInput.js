// jshint esversion:6
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';
import { useState } from 'react';


function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <Modal visible={props.showModal} animationType="slide">
        <View style={styles.inputContainer}>
        {/* { <Text>My 2023 Goal</Text> } */}
        <TextInput style={styles.textInput} placeholder='Enter a Goal' 
        onChangeText={goalInputHandler} 
        value = {enteredGoalText}/>
        <Button title='Add goal' onPress={addGoalHandler}
        />
      </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
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
});

export default GoalInput;