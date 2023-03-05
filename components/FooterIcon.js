import { View, Text ,Image,StyleSheet,Linking,TouchableOpacity} from 'react-native'

const FooterIcon = () => {
  const handlePress = async () => {
    const fbSchemeUrl = 'fb://page/page_id'; // replace "page_id" with your Facebook page ID
    const fbWebUrl = 'https://www.facebook.com/page_name'; // replace "page_name" with your Facebook page name

    try {
      const supported = await Linking.canOpenURL(fbSchemeUrl);

      if (supported) {
        // If the Facebook app is installed, open the app to the specified page
        await Linking.openURL(fbSchemeUrl);
      } else {
        // If the Facebook app is not installed, open the Facebook website in the device's browser
        await Linking.openURL(fbWebUrl);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <View style={styles.footerimgWrapper}>
        <TouchableOpacity onPress={handlePress}>
        <Image style={styles.img} source={require('../assets/facebook.png')}/>
        </TouchableOpacity>
        <Image style={styles.img} source={require('../assets/google.png')}/>
        <Image style={styles.img} source={require('../assets/indeed.png')}/>
        </View>
    </View>
  )
}
export default FooterIcon

let styles = StyleSheet.create({
    footerimgWrapper:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'center'
    },
    img:{
        width:45,
        height:45,
        margin:5
    },
})