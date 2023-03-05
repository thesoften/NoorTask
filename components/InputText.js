import { View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native'
const InputText = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.UseNameText}>Username</Text>
      <TextInput style={styles.InputTextStyle}/>
      <Text style={[styles.UseNameText,{marginTop:50}]}>Password</Text>
      <TextInput
       style={styles.InputTextStyle}
       secureTextEntry={true}/>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
         style={styles.btnTextWrapper}
         onPress={()=>navigation.navigate('FirstScreen')}>
            <Text style={styles.btnText}>Login Now</Text>
        </TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password ?</Text>
      </View>
      <View>
      </View>
    </View>
  )
}
export default InputText


let styles = StyleSheet.create({
    container:{
        padding:20,
    },
    UseNameText:{
        color:'rgb(164, 167, 171)',
        fontWeight:'500',
        fontSize:17,
    },
    InputTextStyle:{
        borderBottomWidth:1,
        borderBottomColor:'rgb(164, 167, 171)',
        width:370,
        padding:20
    },
    btnWrapper:{
        alignItems:'center',
        marginTop:40
    },
    btnTextWrapper:{
        borderWidth:1,
        width:270,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        backgroundColor:'rgb(3, 78, 247)',
        borderColor:'rgb(3, 78, 247)'
    },
    btnText:{
        fontSize:20,
        fontWeight:'700',
        color:'white'
    },
    forgotText:{
        color:'grey',
        fontWeight:'500',
        fontSize:17,
        marginTop:20
    }
})