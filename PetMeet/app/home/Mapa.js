import { StyleSheet, View, Text} from 'react-native';


export default function Mapa() {
  return (
    <View style={styles.container}>
        <Text style={ { fontSize: 32, fontWeight: 'bold'} }>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
});


