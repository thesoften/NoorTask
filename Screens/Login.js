import { View, Text } from 'react-native'
import TopHead from '../components/TopHead'
import LoginWelcome from '../components/LoginWelcome'
import InputText from '../components/InputText'
import FooterIcon from '../components/FooterIcon'
import AccountSignUp from '../components/AccountSignUp'

const Login = ({navigation}) => {
  return (
    <View>
        <TopHead/>
        <LoginWelcome/>
        <InputText navigation={navigation}/>
        <FooterIcon/>
        <AccountSignUp/>
    </View>
  )
}
export default Login