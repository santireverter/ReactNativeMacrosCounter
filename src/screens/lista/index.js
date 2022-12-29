import { useContext, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { AddImage, AddItem, ItemComida } from '../../components';
import { FoodContext } from '../../context/FoodContext';
import { styles } from './style';


const Lista = () => {

    const { foodList, setFoodList } = useContext(FoodContext);

    const eliminarComida = (id) => {
        setFoodList(foodList.filter((comida) => comida.id !== id))
    }

    const renderItem = ({ item }) => {
        return (
            <ItemComida item={item} eliminarComida={eliminarComida}/>
        )
    };

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