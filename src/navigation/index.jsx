import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./appNavigation";


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppNavigation/>
        </NavigationContainer>
    )
}

export default AppNavigator;