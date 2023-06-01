import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import params from './src/params'
import Field from './src/components/Field'
import { Component } from 'react';
import MineField from './src/components/MineField';
import { createMineBoard, cloneBoard, hadExplosion, openField, showMines, wonGame, invertFlag } from './src/functions';

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
            board: createMineBoard(rows, cols, this.minesAmount()),
            won: false,
            lost: false,
        }
    }

    onOpenField = (row, column) => {
        const board = cloneBoard(this.state.board)
        openField(board, row, column)
        const lost = hadExplosion(board)
        const won = wonGame(board)

        if (lost) {
            showMines(board)
            Alert.alert('Perdeu!', 'que burro')
        }

        if (won) {
            Alert.alert('Parabéns!', 'Você Venceu')
            
            
        }
        
        this.setState({ board, lost, won })
    }
    
    onSelectField = (row,column) => {
        const board= cloneBoard(this.state.board)
        invertFlag(board,row,column)
        const won = wonGame(board)
        
        if(won){
            Alert.alert('Parabéns!', 'Você Venceu')
        }
        this.setState({board, won})

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.board}>
                    <MineField board={this.state.board}
                        onOpenField={this.onOpenField}
                        onSelectField={this.onSelectField} />
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
    board: {
        alignItems: 'center',
        backgroundColor: '#aaa'
    }
});
