import React, { useState } from 'react';

const FoodContext = React.createContext();

const FoodProvider = ({children}) => {

    const [foodName, setFoodName] = useState('');
    const [foodProtein, setFoodProtein] = useState('');
    const [foodCarbs, setFoodCarbs] = useState('');
    const [foodFats, setFoodFats] = useState('');
    const [foodList, setFoodList] = useState([]);

    return(
        <FoodContext.Provider value={{foodName, foodProtein, foodCarbs, foodList, foodFats}}>{children}</FoodContext.Provider>
    )
}

export {FoodContext, FoodProvider}