import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inicio, Lista } from "../screens";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return(
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen name="Inicio" component={Inicio} options={{
                    headerShown:false,
                }}/>
                <Stack.Screen name="Lista" component={Lista}/>
            </Stack.Navigator>
    )
}

export default AppNavigation;

