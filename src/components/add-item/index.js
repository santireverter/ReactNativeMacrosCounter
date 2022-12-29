import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './style.js';

const AddItemName = ({ food, agregarComida, onHandleChange }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={food}
                placeholder='Ingrese aqui el nombre de la comida'
                onChangeText={text => onHandleChange(text)}
            />
            {/* <Button disabled={!food} title='Agregar' onPress={agregarComida} color={"#000"} /> */}
        </View>
    )
}

export default AddItemName;