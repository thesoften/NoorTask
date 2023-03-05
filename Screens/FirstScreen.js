import {
     View,
     Text,
     TouchableOpacity,
     Image,
     StyleSheet,
     TextInput    
    } from 'react-native'
    import TopHead from '../components/TopHead'
    import Mid from '../components/Mid'
    import FooterIcon from '../components/FooterIcon'


const FirstScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TopHead/>
      <Mid navigation={navigation}/>
      <FooterIcon/>
    </View>
  )
}
export default FirstScreen

let styles = StyleSheet.create({
    container:{
        // flex:1
    },
})