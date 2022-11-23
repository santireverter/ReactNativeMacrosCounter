import React from "react"
import { TouchableOpacity, Text, Button } from "react-native"
import { styles } from "./style"

    const ItemComida = ( {item, eliminarComida} ) => {
        
        return (
            <TouchableOpacity style = {styles.listItem}>
                <Text style={styles.itemText}>{item.title}</Text>
                <Button title='X' color={"#000"} style={styles.button} onPress={() => eliminarComida(item.id)}/>
            </TouchableOpacity>
        )
    }

export default ItemComida;   


