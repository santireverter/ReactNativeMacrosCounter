import { View } from "react-native"
import { Intro } from "../../components/index";
import { styles } from "./style";

    const Inicio = ({comenzarEnlistado}) => {
        return(
            <View style={styles.container}>
                <Intro comenzar={comenzarEnlistado}/>
            </View>
        )
    }

    export default Inicio;