import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './style.js';

const AddItem = ({ task, addItem, onHandleChange }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={task}
                placeholder='Ingrese aqui una nueva comida'
                onChangeText={text => onHandleChange(text)}
            />
            <Button disabled={!task} title='Agregar' color='#9a848f' onPress={addItem} />
        </View>
    )
}

export default AddItem;