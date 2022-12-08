import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppNavigation from "./appNavigation";
import ComidasCargadasNavigation from "./comidasCargadas";

const BottomTab = createBottomTabNavigator();

const Tabs = () =>{
    return (
        <BottomTab.Navigator initialRouteName="CounterTab" screenOptions={{headerShown: false,}}>
            <BottomTab.Screen name="CounterTab" component={AppNavigation} />
            <BottomTab.Screen name="ComidasTab" component={ComidasCargadasNavigation} />
        </BottomTab.Navigator>
    );
};

export default Tabs;