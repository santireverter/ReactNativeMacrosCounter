import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AgregarComidas, Inicio, Lista, } from "../screens";
import  Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from "react-native";
import colors from "../constants/theme/colors";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return(
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen name="Inicio" component={Inicio} options={{
                    headerShown:false,
                }}/>
                <Stack.Screen name="Lista" component={Lista} options={({ navigation }) => ({
                    title: "Lista de comidas",
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("AgregarComidas")}>
                            <Ionicons name='add-circle-outline' size={25} color={colors.primary}/>
                        </TouchableOpacity>
                    )
                })}
                />
                <Stack.Screen name="AgregarComidas" component={AgregarComidas}/>
            </Stack.Navigator>
    )
}

export default AppNavigation;

