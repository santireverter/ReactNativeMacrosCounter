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
                    <Text style={styles.information}> Este item tiene {item.protein} de proteina</Text> 
                    <Text style={styles.information}> Este item tiene {item.carbs} de carbohidratos</Text>                        
                    <Text style={styles.information}> Este item tiene {item.fat} de grasas</Text>                            
                    <Button title="Cerrar" onPress={onPressHandler}/>
                </View>
            </Modal>
        </View>
    )
}

export default NutritionFacts;