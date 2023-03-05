import { View, Text,StyleSheet } from 'react-native'
const AccountSignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.accountText}>Don't have and account?</Text>
      <Text style={styles.SignupText}>Sign Up</Text>
    </View>
  )
}
export default AccountSignUp

let styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
    },
    accountText:{
        color:'rgb(164, 167, 171)',
        fontWeight:'500',
        fontSize:16,
    },
    SignupText:{
        fontSize:16,
        color:'grey',
        fontWeight:'800',
    }
})