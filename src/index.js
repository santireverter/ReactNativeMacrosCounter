import {  useState } from 'react';
import { ActivityIndicator, View, } from 'react-native';
import { styles } from './style'
import { Inicio, Lista } from './screens';
import { useFonts } from 'expo-font';
import colors from './constants/colors';

export default function App() {

    const [loaded] = useFonts({
        'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
        'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
        'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
    })

    const [comenzar, setComenzar] = useState(false);

    const comenzarEnlistado = () => {
        setComenzar(true);
    }

    let contenido = <Inicio comenzarEnlistado={comenzarEnlistado}/>;
    if (comenzar === true){
        contenido = <Lista/>;
    }

    if(!loaded){
        return(
            <View style={styles.containerActivityIndicator}>
                <ActivityIndicator size='large'/>
            </View>
        )
    }

    return (
    <View style={styles.container}>
        {contenido}
    </View>
    );
}
