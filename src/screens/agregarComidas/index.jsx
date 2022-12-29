import { useContext, useState } from "react";
import { Text, View } from "react-native";
import { AddImage, AddItem } from "../../components";
import { FoodContext } from "../../context/FoodContext";
import { styles } from "./style";

const AgregarComidas = () => {

    return(
        <View style={styles.container}>
            <AddItem />
        </View>
    )
}

export default AgregarComidas;