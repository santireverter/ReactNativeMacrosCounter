import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppNavigation from "./appNavigation";
import ComidasCargadasNavigation from "./comidasCargadas";
import { Ionicons } from '@expo/vector-icons';
import colors from "../constants/colors";

const BottomTab = createBottomTabNavigator();

const Tabs = () =>{
    return (
        <BottomTab.Navigator initialRouteName="CounterTab" screenOptions={{headerShown: false,}}>
            <BottomTab.Screen 
                name="CounterTab"
                component={AppNavigation}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={ focused ? 'home' : 'home-outline'} size={22}  color={colors.borderColor}/>
                    )
                }}/>
            <BottomTab.Screen 
                name="ComidasTab"
                component={ComidasCargadasNavigation}
                options={{
                    title: 'Comidas',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={ focused ? 'fast-food' : 'fast-food-outline'} size={22}  color={colors.borderColor}/>
                    )
                }}/>
        </BottomTab.Navigator>
    );
};

export default Tabs;