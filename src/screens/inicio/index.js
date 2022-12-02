import { View } from "react-native"
import { Intro } from "../../components/index";
import { styles } from "./style";

    const Inicio = ({comenzarEnlistado, navigation}) => {
        return(
            <View style={styles.container}>
                <Intro comenzar={comenzarEnlistado} navigation={navigation}/>
            </View>
        )
    }

    export default Inicio;