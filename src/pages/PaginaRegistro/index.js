import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function PaginaRegistro(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input}/>
            <TextInput placeholder='Confirmar Senha' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'EsqueciaSenha'}}>Esqueceu a senha? </Link>
                <Link to={{screen: 'PaginaLogin'}}>Voltar para o Login </Link>
            </View>
        </View>
    )
}