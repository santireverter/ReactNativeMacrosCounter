import { ActivityIndicator, View, } from 'react-native';
import { styles } from './style'
import { useFonts } from 'expo-font';
import AppNavigator from '../src/navigation/index';
import { Provider } from 'react-redux';
import  store  from './store'


export default function App() {

    const [loaded] = useFonts({
        'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
        'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
        'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
    })

    if(!loaded){
        return(
            <View style={styles.containerActivityIndicator}>
                <ActivityIndicator size='large'/>
            </View>
        )
    }

    return (
    <View style={styles.container}>
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    </View>
    );
}
