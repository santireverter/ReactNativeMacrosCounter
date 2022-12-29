import { useState } from "react";
import { Text, View } from "react-native";
import { AddImage, AddItemName } from "../../components";
import { styles } from "./style";

const AgregarComidas = () => {

    const [foodName, setFoodName] = useState('');
    const [foodProtein, setFoodProtein] = useState('');
    const [foodCarbs, setFoodCarbs] = useState('');
    const [foodFats, setFoodFats] = useState('');
    const [foodList, setFoodList] = useState([]);
    const [image, setImage] = useState(null);

    const agregarComida = () => {
        setFoodList([...foodList, { id: Math.random(), title: foodName, protein: foodProtein, fat: foodFats, carbs: foodCarbs}]);
        setFoodName('');
        setFoodProtein('');
        setFoodCarbs('');
        setFoodFats('');
    }

    const valueInput = (text) => {
        setFoodName(text);
    }

    const onImagePicker = (uri) =>{
        setImage(uri);
    }

    return(
        <View style={styles.container}>
            <AddItemName food={foodName} agregarComida={agregarComida} onHandleChange={valueInput}/>
            <AddImage onImagePicker={onImagePicker}/>
        </View>
    )
}

export default AgregarComidas;