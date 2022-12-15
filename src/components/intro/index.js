import { View, Text, Button } from "react-native";
import colors from "../../constants/theme/colors";
import { styles } from "./style";

const Intro = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenidos A MacroCounter</Text>
            <Text style={styles.subTitle}>Para comenzar a marcar sus comidas aprete el boton</Text>
            <Button title="COMENZAR" color={colors.primary} onPress={() => navigation.navigate("Lista")}/>
        </View>
    )
}

export default Intro;