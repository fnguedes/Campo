import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Flag(props) {
  return (
    <View style={style.container}>
      <View style={[style.mastro, props.bigger ? style.mastroG : null]} />
      <View style={[style.base1, props.bigger ? style.base1G : null]} />
      <View style={[style.base2, props.bigger ? style.base2G : null]} />
      <View style={[style.bandeira, props.bigger ? style.bandeiraG : null]} />
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    marginTop: 2
  },
  mastro: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9,
  },
  mastroG: {
    height: 28,
    width: 4,
    marginLeft: 16
  },
  base1: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10
  },
  base1G: {
    height: 4,
    width: 12,
    marginTop: 20,
    marginLeft: 12
  },
  base2: {
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 12
  },
  base2G: {
    height: 4,
    width: 20,
    marginLeft: 8,
    marginTop: 24
  },
  bandeira: {
    position: 'absolute',
    height: 5,
    width: 6,
    backgroundColor: "#f22",
    marginLeft: 3
  },
  bandeiraG: {
    height: 10,
    width: 14,
    marginLeft: 3
  }
})