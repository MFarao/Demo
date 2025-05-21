import { StyleSheet, Text, View, Image } from 'react-native';

//Importar imagen
import Logo from '../assets/Logo PetMeet.png';

export function LogoConTexto() {
  return (
    <><View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.texto}>PetMeet</Text>
    </View><View>
        <Text style={styles.frase}>Conecta con amantes de las mascotas</Text>
      </View></>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, 
  },
  logo: {
     width: 45, 
     height: 41,
     marginRight: 5, 
  },
  texto: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  frase: {
    color: 'grey',
    marginBottom: 10, 
  }
});