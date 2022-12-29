import React, { useState } from 'react';

const FoodContext = React.createContext();

const FoodProvider = ({children}) => {

    const [foodName, setFoodName] = useState('');
    const [foodProtein, setFoodProtein] = useState('');
    const [foodCarbs, setFoodCarbs] = useState('');
    const [foodFats, setFoodFats] = useState('');
    const [foodList, setFoodList] = useState([]);

    const agregarComida = () => {
        setFoodList([...foodList, { id: Math.random(), title: foodName, protein: foodProtein, fat: foodFats, carbs: foodCarbs}]);
        setFoodName('');
        setFoodProtein('');
        setFoodCarbs('');
        setFoodFats('');
        console.warn('name: ' + foodName + ' protein: ' + foodProtein + ' fat: ' + foodFats + ' carbs: ' + foodCarbs, foodList)
    }

    const nameInput = (text) => {
        setFoodName(text);
    }

    const proteinInput = (text) => {
        setFoodProtein(text);
    }

    const fatInput = (text) => {
        setFoodFats(text);
    }

    const carbsInput = (text) => {
        setFoodCarbs(text);
    }

    return(
        <FoodContext.Provider value={{foodName, foodProtein, foodCarbs, foodList, foodFats, agregarComida, nameInput, proteinInput, fatInput, carbsInput, setFoodList}}>
            {children}
        </FoodContext.Provider>
    )
}

export {FoodContext, FoodProvider}