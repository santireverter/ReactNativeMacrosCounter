import { Button, Modal, Text, View } from "react-native";
import { styles } from '../nutritionFacts/style'

const NutritionFacts =({modalView, onPressHandler, item})=>{

    return(
        <View style={styles.modalContainer}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalView}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.information}>Este item tiene X cantidad de proteina</Text>
                    <Button title="Cerrar" onPress={onPressHandler}/>
                </View>
            </Modal>
        </View>
    )
}

export default NutritionFacts;