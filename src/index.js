import { useEffect, useState } from 'react';
import { Text, View, Button, Modal, FlatList, TouchableOpacity, } from 'react-native';
import { styles } from './style'
import { AddItem, ItemComida } from './components/index';

export default function App() {

  const [food, setFood] = useState('');
  const [foodList, setFoodList] = useState([]);

  const valueInput = (text) => {
    setFood(text);
  }

  const agregarComida = () => {
    setFoodList([...foodList, { id: Math.random(), title: food }]);
    setFood('');
  }

  const eliminarComida = (id) => {
    setFoodList(foodList.filter((comida) => comida.id !== id))
    console.log(foodList)
  }
  

  const renderItem = ({ item }) => {
    return (
      <ItemComida item={item} eliminarComida={eliminarComida}/>
    )
  };


  return (
    <View style={styles.container}>
      <AddItem food={food} agregarComida={agregarComida} onHandleChange={valueInput} />
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Lista de Comidas</Text>
      </View>
      <FlatList
        data={foodList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
