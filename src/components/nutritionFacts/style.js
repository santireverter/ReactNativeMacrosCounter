import { StyleSheet } from "react-native";
import colors from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center',  
    },
    container:{
        justifyContent: 'space-around',  
        alignItems: 'center',   
        backgroundColor : colors.backgroundModal,   
        height: 300 ,  
        width: '80%',  
        borderRadius:10,  
        borderWidth: 1,  
        borderColor: '#ECF0F1',    
        marginTop: 80,  
        marginLeft: 40, 
    },
    title:{
        fontFamily: 'Lato-Bold',
        fontSize: 25,
        color: colors.textColor,
    },
    information:{
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        color: colors.textColor,
        paddingLeft: 10,
        paddingRight: 10,
    }
})