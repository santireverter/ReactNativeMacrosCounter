import { styles } from './style'
import { View, Modal, Button, Text } from 'react-native'


const CloseModal = ({modalView, onPressHandler, item, eliminarItem}) => {

    const onPressDeleter = () => {
        onPressHandler();
        eliminarItem(item.id);
    }

    return(
        <View style={styles.modalContainer}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalView}
            >
                <View style={styles.container}>
                    <Text style={styles.delete}>Quiere usted eliminar este Item?</Text>
                    <View style={styles.buttonContainer}>
                        <Button title='Cancelar' onPress={onPressHandler} />
                        <Button title='Continuar' onPress={onPressDeleter} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default CloseModal;