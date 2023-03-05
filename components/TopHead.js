import { View, Text,StyleSheet,Image } from 'react-native'
const TopHead = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('../assets/martini.png')}/>
      <Text style={styles.SalesText}>SALES TOP</Text>
    </View>
  )
}
export default TopHead


let styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        padding:20,
    },
    SalesText:{
        marginLeft:1,
        fontWeight:'800'
    },
    icon:{
        width:50,
        height:50
    }
})