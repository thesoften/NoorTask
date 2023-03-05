import { View, Text ,StyleSheet} from 'react-native'
const LoginWelcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <Text style={styles.signinText}>Sign in to continue</Text>
    </View>
  )
}
export default LoginWelcome

let styles = StyleSheet.create({
    container:{
        padding:20
    },
    welcomeText:{
        fontSize:35,
        fontWeight:'500'
    },
    signinText:{
        color:'rgb(164, 167, 171)',
        marginTop:20,
        fontWeight:'500'
    }
})