import { styles } from "./style";
import { View, Text, FlatList} from "react-native";
import { COMIDASPRECARGADAS } from '../../constants/data/comidasPrecargadas'
import { ItemComidasPrecargadas } from "../../components";
import { useSelector } from "react-redux";


const ComidasCargadas =() => {

    const comidas = useSelector((state) => state.products.comidas)
    const renderItem = ({ item }) =>{
        return(
            <ItemComidasPrecargadas item={item}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={comidas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
        </View>
    )
}

export default ComidasCargadas;