import {  useState } from 'react';
import { View, } from 'react-native';
import { styles } from './style'
import { Inicio, Lista } from './screens';

export default function App() {

    const [comenzar, setComenzar] = useState(false);

    const comenzarEnlistado = () => {
        setComenzar(true);
    }

    let contenido = <Inicio comenzarEnlistado={comenzarEnlistado}/>;
    if (comenzar === true){
        contenido = <Lista/>;
    }

    return (
    <View style={styles.container}>
        {contenido}
    </View>
    );
}
