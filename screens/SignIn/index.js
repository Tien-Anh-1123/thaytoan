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
import Ipspass from '../../src/inputpass';
import Logos from '../../src/logo';
import Btnback from '../../src/btnback';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons'; 

export default function SignInScreen({ navigation }) {
  const [Email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const goToHome = () => {
    if (Email.trim() == '' || !Email) {
      alert('Không được để trống email !');
    } else if (password.trim() == '' || !password) {
      alert('Không được để trống mật khẩu ! ');
      // alert('Không được để trống mật khẩu ! ' + password.trim());
    } else {
      login();
    }
  };
  const login = async () => {
    let userData = await AsyncStorage.getItem('userData');
    if (userData) {
      userData = JSON.parse(userData);
      let arr = [...userData];
      arr = arr.filter(
        (value) =>
          value.Email.toLocaleLowerCase() == Email.toLocaleLowerCase() &&
          value.password == password
      );
      if (arr.length > 0) {
        let curUser = arr[0];
        AsyncStorage.setItem('curUser', JSON.stringify(curUser));
        navigation.navigate('Home');
      } else alert('Email hoặc mật khẩu không chính xác!');
    } else {
      alert('Email hoặc mật khẩu không chính xác!');
    }
  };
  const goToSignUp = async () => {
    navigation.navigate('SignUpScreen');
  };
  const checkLogin = async () => {
    let userData = await AsyncStorage.getItem('curUser');
    // ko cần đăng nhập 
    if (userData) navigation.replace('Home');
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <View style={styles.container}>
      <View style={{
        alignSelf: 'flex-start',
        marginTop: 40,
        marginLeft: 10,
      }}><TouchableOpacity onPress={() => { navigation.goBack() }} >
        <AntDesign name="back" size={24} color="#0066FF" />
      </TouchableOpacity>
      </View>
      <View style={{
        margin: 8,
        marginTop:15,
      }}>
        <Text style={{
          fontSize: 30,
          fontWeight: "bold",
          color: '#0099FF',      
        }}>ĐĂNG NHẬP</Text></View>
      <View style={{
        margin: 8,
        marginTop:15,
      }}>
        <Ips Text="Email" placeholder="Nhập email" onChangeText={setemail} /></View>
      <View style={{
        margin: 8,
        marginTop:15,
      }}>
        <Ipspass Text="Password" placeholder="Nhập mật khẩu"  onChangeText={setpassword}/></View>
      <View style={{
        paddingHorizontal: 10,
        marginTop:30,
        }}>
        <Btns color='#81d3e3' Text='Đăng nhập' onPress={goToHome}></Btns>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});


