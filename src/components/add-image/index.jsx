import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button, Image, Text, View } from "react-native";
import colors from "../../constants/theme/colors";
import { styles } from "./style";


const AddImage = ({ onImagePicker }) => {
    const [pickedUrl, setPickedUrl] = useState(null);

    const onHandleTakeImage = async () =>{
        const cameraPermission = await verifyPermissions();
        if (!cameraPermission) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8,
        });

        setPickedUrl(image.uri);
        onImagePicker(image.uri);
    }

    const verifyPermissions = async() => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("Permisos insuficientes", "Necesitas dar permisos para usar la cámara", [
            { text: "Ok" },
        ]);
        return false;
        }
    return true;
    };

    return(
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? (
                    <Text style={styles.message}>Agregue una imagen a su comida</Text>
                ) : (
                    <Image style={styles.image} source={{ uri: pickedUrl }} />
                )
                }
            </View>
            <Button title="Agregar Foto" color= {colors.primary} onPress={onHandleTakeImage} />
        </View>
    );
};

export default AddImage;