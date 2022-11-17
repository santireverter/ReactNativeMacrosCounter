import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './style.js';

const AddItem = ({ food, agregarComida, onHandleChange }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={food}
                placeholder='Ingrese aqui una nueva comida'
                onChangeText={text => onHandleChange(text)}
            />
            <Button disabled={!food} title='Agregar' onPress={agregarComida} color={"#000"} />
        </View>
    )
}

export default AddItem;