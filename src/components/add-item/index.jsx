import React, { useContext, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import colors from '../../constants/theme/colors.js';
import { FoodContext } from '../../context/FoodContext.jsx';
import AddImage from '../add-image/index.jsx';
import { styles } from './style.js';

const AddItem = () => {

    const {agregarComida, foodName, foodProtein, foodCarbs, foodFats, nameInput, proteinInput, fatInput, carbsInput} = useContext(FoodContext);
    
    const [image, setImage] = useState(null);

    const onImagePicker = (uri) =>{
        setImage(uri);
    }
    
    const checkFood = () => {
        if (!foodName || !foodProtein || !foodCarbs || !foodFats){
            return true;
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={foodName}
                placeholder='Ingrese aqui el nombre de la comida'
                onChangeText={text => nameInput(text)}
            />
            <TextInput
                style={styles.input}
                value={foodProtein}
                placeholder='Ingrese cantidad de proteinas'
                onChangeText={text => proteinInput(text)}
            />
            <TextInput
                style={styles.input}
                value={foodCarbs}
                placeholder='Ingrese cantidad de Carbohidratos'
                onChangeText={text => carbsInput(text)}
            />
            <TextInput
                style={styles.input}
                value={foodFats}
                placeholder='Ingrese cantidad de Grasas'
                onChangeText={text => fatInput(text)}
            />
            <AddImage onImagePicker={onImagePicker}/>
            <Button disabled={checkFood()} title='Agregar' onPress={agregarComida} color={colors.primary} />
        </View>
    )
}

export default AddItem;