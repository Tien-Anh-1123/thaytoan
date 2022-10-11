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
import React, { useState } from 'react'
import Btns from '../../src/btn';
import Ips from '../../src/input';
import Ipspass from '../../src/inputpass';
import Logos from '../../src/logo';
import Btnback from '../../src/btnback';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons'; 

export default function SignInScreen({navigation})  {
  const [Email, setemail] = useState("");
  const [Name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [Phone, setphone] = useState("");
  const onGoBack = () => {
    navigation.goBack();
  };
  const onSignUp = () => {
    if (Name.trim() == "" || !Name) {
      alert("Không được để trống họ và tên !");
    } else if (Email.trim() == "" || !Email) {
      alert("Không được để trống email !");
    } else if (password.trim() == "" || !password) {
      alert("Không được để trống mật khẩu !");
    }else if( Phone.trim() == "" || !Phone) {
      alert("Không được để trống số điện thoại !")
    }else {
      createAccount();
    }
  };
  const createAccount = async () => {
    let userData = await AsyncStorage.getItem("userData");
    if (userData) {
      userData = JSON.parse(userData);
      let arr = [...userData];
      arr = arr.filter(
        (value) => value.Email.toLocaleLowerCase() == Email.toLocaleLowerCase()
      );
      if (arr.length > 0) {
        alert("Email already registered!");
        return;
      } else {
        userData.push({
          Name: Name.trim(),
          Email: Email.trim(),
          password: password.trim(),
          Phone: Phone.trim(),
        });
      }
    } else {
      userData = [];
      userData.push({
        Name: Name.trim(),
          Email: Email.trim(),
          password: password.trim(),
          Phone: Phone.trim(),
      });
    }
    AsyncStorage.setItem("userData", JSON.stringify(userData));
    alert("Đăng ký thành công!");
    navigation.goBack();
  };
  return (
    
    <View style={styles.container}>
      <View style={{
        alignSelf: 'flex-start',
        marginTop: 40,
        marginLeft: 10,
      }}><TouchableOpacity onPress={() => { navigation.goBack() }} >
        <AntDesign name="back" size={24} color="#0066FF" />
      </TouchableOpacity></View>
      <Text style={{
        fontSize: 40,
        fontWeight: "bold",
        color: 'blue',
        marginTop:50,
      }}>Đăng ký tài khoản</Text>
      <View style={{
        marginTop:50,
      }}>
        <Ips Text="Name" placeholder="Họ và tên" onChangeText={setname} /></View>
      <View style={{
        marginTop:10,
      }}>
        <Ips Text="Phone" placeholder="Số điện thoại" onChangeText={setphone} /></View>
      <View style={{
        marginTop:10,
      }}>
        <Ips Text="Email" placeholder="Email" onChangeText={setemail} /></View>
      <View style={{
        marginTop:10,
      }}>
        <Ipspass Text="Password" placeholder="Mật khẩu" onChangeText={setpassword} /></View>
      <View style={{
        marginTop:35,
      }}>
        <Btns color='#81d3e3' Text='Đăng ký' onPress={onSignUp}></Btns>
      </View> 
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
  },
 
});

