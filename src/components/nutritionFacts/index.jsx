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
                    {
                        (item.proteina !== undefined) ?
                            <Text style={styles.information}> Este item tiene {item.proteina} de proteina</Text> :
                            <Text style={styles.information}>Este item tiene X cantidad de proteina</Text>
                    }
                    {
                        (item.carbohidratos !== undefined) ?
                            <Text style={styles.information}> Este item tiene {item.carbohidratos} de carbohidratos</Text> :
                            <Text style={styles.information}>Este item tiene X cantidad de carbohidratos</Text>
                    }
                    {
                        (item.grasas !== undefined) ?
                            <Text style={styles.information}> Este item tiene {item.grasas} de grasas</Text> :
                            <Text style={styles.information}>Este item tiene X cantidad de grasas</Text>
                    }
                    <Button title="Cerrar" onPress={onPressHandler}/>
                </View>
            </Modal>
        </View>
    )
}

export default NutritionFacts;