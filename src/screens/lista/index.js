import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { AddItem, ItemComida } from '../../components';
import { styles } from './style';


const Lista = () => {

    const [food, setFood] = useState('');
    const [foodList, setFoodList] = useState([]);

    const agregarComida = () => {
        setFoodList([...foodList, { id: Math.random(), title: food }]);
        setFood('');
    }

    const valueInput = (text) => {
        setFood(text);
    }

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
            <AddItem food={food} agregarComida={agregarComida} onHandleChange={valueInput}/>
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