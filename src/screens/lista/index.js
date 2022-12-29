import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { AddImage, AddItemName, ItemComida } from '../../components';
import { styles } from './style';


const Lista = () => {

    const [food, setFood] = useState('');
    const [foodList, setFoodList] = useState([]);
    const [image, setImage] = useState(null);

    // const agregarComida = () => {
    //     setFoodList([...foodList, { id: Math.random(), title: food }]);
    //     setFood('');
    // }

    // const valueInput = (text) => {
    //     setFood(text);
    // }

    const eliminarComida = (id) => {
        setFoodList(foodList.filter((comida) => comida.id !== id))
    }

    const renderItem = ({ item }) => {
        return (
            <ItemComida item={item} eliminarComida={eliminarComida}/>
        )
    };

    // const onImagePicker = (uri) =>{
    //     setImage(uri);
    // }

    return(
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <Text style= {styles.listTitle}>Lista de comidas</Text>
            </View>
            <FlatList
                data={foodList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
        </View>
    )
}

export default Lista;