import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native';
import Btns from '../../src/btn';
import Ips from '../../src/input';
import Logos from '../../src/logo';
export default function LoginScreen({ navigation }) {
  return (
    <View style={{
      flex:1,
      backgroundColor:'white',
    }}>
      <View style={styles.container}>
      <Logos></Logos>
      <View style={{
        margin: 20,
        alignItems:'center',
        justifyContent: 'center',
      }}>
        <Text style={{
          fontSize: 30,
          fontWeight: "bold",
          color: 'violet',
          alignItems:'center',
          justifyContent: 'center',
          marginLeft:18,
        }}>WELCOME TO </Text>
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
        color: 'violet',
        alignItems:'center',
        justifyContent: 'center',
      }}> MOTOBIKE</Text></View>
      <Text style={{ 
        marginBottom: 15 
        }}>
      </Text>
      <Btns color="#81d3e3" Text='Đăng nhập' onPress={() => {navigation.navigate('SignIn') }} ></Btns>
            <Btns color="#8e64a1" Text='Đăng ký' onPress={() => {navigation.navigate('SignUp') }}></Btns>
    </View>
    </View>
    
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
