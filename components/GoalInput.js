// jshint esversion:6
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
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
        <Image style={styles.image} source={ require('../assets/images/goal.png') } />
        <TextInput style={styles.textInput} placeholder='Enter a Goal' 
        onChangeText={goalInputHandler} 
        value = {enteredGoalText}/>
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title='Add goal' onPress={addGoalHandler}/>
        </View>
        <View style={styles.button}>
        <Button title='Cancel' onPress={props.onCancel}/>
        </View>
        </View>
      </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        padding: 8
      },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
      },
    button: {
        width: '30%',
        marginHorizontal: 8,
    },
    image:{
      width: 100,
      height: 100,
      margin: 20
    }
});

export default GoalInput;