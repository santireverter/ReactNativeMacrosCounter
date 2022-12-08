import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ComidasCargadas } from "../screens";


const Stack = createNativeStackNavigator();

const ComidasCargadasNavigation = () =>{
    return(
        <Stack.Navigator initialRouteName="Comidas">
            <Stack.Screen name="Comidas" component={ComidasCargadas}/>
        </Stack.Navigator>
    );
}
export default ComidasCargadasNavigation;
