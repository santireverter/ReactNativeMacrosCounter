import React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import { styles } from "./style"

    const TaskItem = ( {item, onHandleSelected} ) => {
        return (
            <View>
                <TouchableOpacity style={styles.listItemContainer} onPress={() => onHandleSelected(item)}>
                    <Text style={styles.listItem}>{item.value}</Text>
                </TouchableOpacity>
            </View>
        )
    }

export default TaskItem;   