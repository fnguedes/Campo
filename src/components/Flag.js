import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Flag() {
  return (
    <View style={style.container}>
      <View style={style.mastro}/>
      <View style={style.base1}/>
      <View style={style.base2}/>
      <View style={style.bandeira}/>
    </View>
  )
}
const style=StyleSheet.create({
  container:{
    marginTop:2
  },
  mastro:{
    position:'absolute',
    height:14,
    width:2,
    backgroundColor:'#222',
    marginLeft:9,
  },
  base1:{
    position:'absolute',
    height:2,
    width:6,
    backgroundColor:'#222',
    marginLeft:7,
    marginTop:10
  },
  base2:{
    position:'absolute',
    height:2,
    width:10,
    backgroundColor:'#222',
    marginLeft:5,
    marginTop:12
  },
  bandeira:{
    position:'absolute',
    height:5,
    width:6,
    backgroundColor:"#f22",
    marginLeft:3
  }
})