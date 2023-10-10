import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function PaginaLogin(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Link to={{screen: 'Home'}}>Login </Link>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'EsqueciaSenha'}}>Esqueceu a senha? </Link>
                <Link to={{screen: 'PaginaRegistro'}}>Cadastre-se </Link>
            </View>
        </View>
    )
}