import { useState } from "react";
import { Pressable, Text, View } from "react-native"
import colors from "../../constants/theme/colors";
import NutritionFacts from "../nutritionFacts";
import { styles } from "./style";

const ItemComidasPrecargadas = ({item}) => {

    const [modalView, setModalView] = useState(false);

    const onPressHandler = () => {
        setModalView(!modalView);
    };

    return (
        <View>
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? colors.primaryPress : colors.primary
                    },
                    styles.listItem
                ]}
                onPress={onPressHandler}>
                <Text style={styles.itemText}>{item.title}</Text>
            </Pressable>
            <NutritionFacts
                modalView={modalView}
                onPressHandler={onPressHandler}
                item={item}
            />
        </View>
    )
}

export default ItemComidasPrecargadas;