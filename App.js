import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import Field from './src/components/Field'
import { Component } from 'react';
import MineField from './src/components/MineField';
import { createMineBoard } from './src/functions';

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = this.createState()
    }

    minesAmount = () => {
        const cols = params.quantDeColuna()
        const rows = params.quantDeLinhas()

        return Math.ceil(cols * rows * params.difficultLevel)
    }

    createState = () => {
        const cols = params.quantDeColuna()
        const rows = params.quantDeLinhas()
        return {
            board: createMineBoard(rows, cols, this.minesAmount())
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Iniciando mine</Text>
                <Text>Tamanho da grade: {params.quantDeColuna()}x{params.quantDeLinhas()}</Text>
                <View style={styles.board}>
                    <MineField board={this.state.board}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    board:{
        alignItems:'center',
        backgroundColor:'#aaa'
    }
});
