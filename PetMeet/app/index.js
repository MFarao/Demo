import { useState } from 'react';
import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { textStyles } from '../Styles/text';
import { LogoConTexto } from "../components/LogoConTexto";
import CampoTexto from '../components/CampoTexto';
import BotonPersonalizado from '../components/BotonPersonalizado';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const handleLogin = () => {
        const validEmail = 'test@correo.com';
        const validPassword = '123456';

        if (!email || !password) {
            Alert.alert('Error', 'Por favor completá todos los campos.');
            return;
        }

        if (email === validEmail && password === validPassword) {
            router.replace('/home/Mapa'); 
        } else {
            Alert.alert('Error', 'Credenciales inválidas');
        }
    };

    return(
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <Text style={ textStyles.H1 }>Bienvenido a</Text>
            <LogoConTexto />
            <Text>Correo Electronico</Text>
            <CampoTexto
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                icon="email"
            />
            <Text>Contraseña</Text>
            <CampoTexto
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                icon="lock"
            />
            <Text>¿Olvidaste tu contraseña?</Text>
            <BotonPersonalizado
                text="Iniciar sesión"
                color="#EC4899"
                holdColor="#DB2777"
                textColor="#fff"
                onPress={handleLogin}
            />
            <Text>¿Problemas para iniciar sesión? Contacto soporte@petmeetapp.com</Text>
            <View style={styles.line} />
            <Text>¿Todavia no tienes una cuenta?</Text>
            <BotonPersonalizado
                text="Registrarse"
                color="grey"
                holdColor="black"
                textColor="#fff"
                onPress={() => router.replace('./Registro')}
            />
            <StatusBar style="dark" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  line: {
    height: 1,                
    width: '50%',            
    backgroundColor: '#ccc', 
    alignSelf: 'center',     
    marginVertical: 12,      
  },
});