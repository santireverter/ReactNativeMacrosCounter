import { View, Text, Button } from "react-native";
import colors from "../../constants/colors";
import { styles } from "./style";

const Intro = ({comenzar}) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenidos A MacroCounter</Text>
            <Text style={styles.subTitle}>Para comenzar a marcar sus comidas aprete el boton</Text>
            <Button title="COMENZAR" color={colors.primary} onPress={() => comenzar()}/>
        </View>
    )
}

export default Intro;