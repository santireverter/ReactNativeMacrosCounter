import { StyleSheet} from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    listContainer: {
        marginHorizontal: 20,
    },
    listTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
    },
})