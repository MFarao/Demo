import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Pressable, Constants } from 'react-native';

//Importar imagen
import Logo from '../assets/Logo PetMeet.png';

export function Main() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Pressable style={styles.boton}></Pressable>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 12,
  },
  logo: {
     width: 100, 
     height: 100
  },

  boton: {

  }
});