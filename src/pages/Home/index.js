import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function Home(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='Tipo de consulta:' style={styles.input}/>
            <TextInput placeholder='Médico:' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Marcar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'PaginaLogin'}}>Log Out </Link>
            </View>
        </View>
    )
}