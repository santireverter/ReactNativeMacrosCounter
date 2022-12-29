import { View } from "react-native";
import AddImage from "../add-image";
import AddItemName from "../add-item";
import { styles } from "./style";

const AddFood = () => {
    return (
        <View style={styles.container}>
            <AddItemName/>
            <AddImage/>
        </View>
    )
}