import { View, Text,Image,StyleSheet ,TouchableOpacity} from 'react-native'

const Mid = ({navigation}) => {
  return (
    <View>
      <View>
        <Image style={styles.ArtIcon} source={require('../assets/Art.png')}/>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.helloText}>Hello!</Text>
        <Text style={[styles.welcomeText,{marginTop:15}]}>Welcome to Sales Top A Platform To</Text>
        <Text style={styles.welcomeText}>Manange Real Estate Needs.</Text>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
         style={[styles.loginWrapper,{backgroundColor:'rgb(3, 78, 247)',borderColor:'rgb(3, 78, 247)'}]}
         onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.btnText,{color:'white'}]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginWrapper]}>
            <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerWrapper}>
        <Text style={styles.socialText}>or via social media</Text>
      </View>
    </View>
  )
}
export default Mid


let styles = StyleSheet.create({
    container:{
        flex:1
    },
    ArtIcon:{
        width:420,
        height:300
    },
    textWrapper:{
        alignItems:'center',
        marginTop:20
    },
    helloText:{
        fontSize:40,
        fontWeight:'800'
    },
    welcomeText:{
        fontSize:18,
        color:'rgb(164, 167, 171)',
        marginTop:5
    },
    btnWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
    },
    loginWrapper:{
        borderWidth:2,
       alignItems:'center',
       justifyContent:'center',
       width:150,
       height:55,
       borderRadius:30,
       margin:10
    },
    btnText:{
        fontSize:18,
        fontWeight:'700'
    },
    footerWrapper:{
      alignItems:'center',
      marginTop:10
    },
    socialText:{
        fontSize:17,
        color:'rgb(164, 167, 171)',
        fontWeight:'500'
    }
})