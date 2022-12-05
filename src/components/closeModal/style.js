import { StyleSheet} from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center',  
    },
    container:{
        justifyContent: 'space-around',  
        backgroundColor : colors.backgroundModal,   
        height: 300 ,  
        width: '80%',  
        borderRadius:10,  
        borderWidth: 1,  
        borderColor: '#ECF0F1',    
        marginTop: 120,  
        marginLeft: 40, 
    },
    delete:{
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        color: colors.textColor,
        paddingLeft: 25,
        paddingRight: 25,
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
})