import { Dimensions } from 'react-native'

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15,
  difficultLevel: 0.1,
  quantDeColuna() {
    const largura = Dimensions.get('screen').width
    return Math.floor(largura / this.blockSize)
  },
  quantDeLinhas() {
    const alturaTotal = Dimensions.get('screen').width
    const alturaTabuleiro = alturaTotal * (1 - this.headerRatio)
    return Math.floor(alturaTabuleiro / this.blockSize)
  }
}

export default params