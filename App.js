import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import Field from './src/components/Fields'

export default function App() {
  return (
    <View style={styles.container}>
        <Text>Iniciando mine</Text>
        <Text>Tamanho da grade: {params.quantDeColuna()}x{params.quantDeLinhas()}</Text>
        <Field/>
        <Field opened/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={6}/>
        <Field opened mined/>
        <Field opened mined exploded/>
        <Field flagged/>
        <Field flagged opened/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
