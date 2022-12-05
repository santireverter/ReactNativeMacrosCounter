import React, { useState } from "react"
import { TouchableOpacity, Text, Button, View, Pressable } from "react-native"
import colors from "../../../constants/colors";
import {NutritionFacts, CloseModal} from "../../index";
import { styles } from "./style"

    const ItemComida = ( {item, eliminarComida} ) => {
        
        const [modalView, setModalView] = useState(false);
        const [longPressModal, setLongPressModal] = useState(false);

        const onPressHandler = () => {
            setModalView(!modalView);
        };

        const onLongPressHandler = () => {
            setLongPressModal(!longPressModal);
        }

        return (
            <View>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? colors.primaryPress : colors.primary
                        }
                        ,
                        styles.listItem
                    ]}
                    onPress={onPressHandler}
                    onLongPress={onLongPressHandler}
                >
                    <Text style={styles.itemText}>{item.title}</Text>
                </Pressable>
                <NutritionFacts
                    modalView={modalView}
                    onPressHandler={onPressHandler}
                    item={item} 
                />
                <CloseModal
                    modalView={longPressModal}
                    onPressHandler={onLongPressHandler}
                    item={item}
                    eliminarItem= {eliminarComida}
                />
            </View>
            
        )
    }

export default ItemComida;   

