import {ScrollView, StyleSheet, Text, Pressable} from "react-native";
import { useState } from 'react';
import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { textStyles } from '../Styles/text';
import { LogoConTexto } from "../components/LogoConTexto";
import CampoTexto from '../components/CampoTexto';
import BotonPersonalizado from '../components/BotonPersonalizado';


export default function Registro(){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const insets = useSafeAreaInsets();
    const router = useRouter();

    return(
        <ScrollView style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}
            contentContainerStyle={styles.contentContainer}>
            <LogoConTexto />
            <Text style={ textStyles.H1 }>Registrate para crear una cuenta </Text>
            <Text style={ [styles.label, {marginTop: 15}] }>Nombre</Text>
            <CampoTexto
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
                icon="person"
            />
            <Text style={styles.label}>Apellido</Text>
            <CampoTexto
                placeholder="Usuario"
                value={apellido}
                onChangeText={setApellido}
                icon="person"
            />
            <Text style={styles.label}>Usuario</Text>
            <CampoTexto
                placeholder="Apodo"
                value={usuario}
                onChangeText={setUsuario}
                icon="tag"
            />
            <Text style={styles.label}>Correo electrónico</Text>
            <CampoTexto 
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                icon="email"
            />
            <Text style={styles.label}>Contraseña</Text>
            <CampoTexto
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                icon="lock"
            />
            <Text style={styles.label}>Confirmar contraseña</Text>
            <CampoTexto
                placeholder="Confirmar contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                icon="lock"
            />
            <BotonPersonalizado
                text="Registrarse"
                onPress={() => router.replace('/home/Mapa')}
            />
            <Text>¿Problemas para registrarte? Contacto soporte@petmeetapp.com</Text>
            <Pressable onPress={() => router.replace('./')}>
            {({ pressed }) => (
                <Text style={{ 
                color: pressed ? '#DB2777' : '#EC4899', 
                textDecorationLine: 'underline',
                marginTop: 20,
                }}>
                ¿Ya tenés una cuenta? Iniciá sesión
                </Text>
            )}
            </Pressable>
            <StatusBar style="dark" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  label: {
    alignSelf: 'flex-start',   
    marginLeft: '14%',  
    marginTop: 5,        
    marginBottom: 4,           
    fontSize: 14,
    color: '#333',
  },
});