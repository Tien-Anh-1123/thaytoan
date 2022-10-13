import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
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
  TouchableOpacity,
  SectionList,
  SafeAreaView
} from 'react-native';
import CA1 from '../src/chuyenanh';
import XEGA from '../src/xega';
import XEMSO from '../src/xeso';
import PKL from '../src/pkl';
//import VISION1 from '../src/vision1';

import { FontAwesome, Ionicons,Octicons,Fontisto,AntDesign,MaterialIcons  } from '@expo/vector-icons';
import XESO from "../src/xeso";
import VISION1 from "../src/vision1";

export default function HomeScreen({ navigation }) {
  const logOut = async () => {
    await AsyncStorage.removeItem("curUser");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={{
          marginLeft: 10,
          marginTop: 10,

        }}>
          <View style={{
            flexDirection:'row',
            marginTop:25,
            // justifyContent:'space-between',

          }}>
            <TouchableOpacity style={{
                  marginLeft:5,
                }}>
                  <FontAwesome name="map-marker" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity >
              <View>
                <Text style={{
                    marginLeft:5,
                    fontSize:17,
                    color:'white',
                    fontWeight:'bold',
                  }}>Việt Nam</Text>
              </View>
            </TouchableOpacity>
            <Text style={{
             marginLeft:40,
             fontSize:20,
             color:'white',
             fontWeight:'bold',
            }}>T.A MoTo</Text>
                <TouchableOpacity style={{
                  marginLeft:60,
                }}>
                  <FontAwesome name="comment" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                  marginLeft:15,
                }}>
                  <Ionicons name="ios-notifications" size={24} color="white" />
                </TouchableOpacity>
          </View>
          <View style={{
            flexDirection:'row', alignItems: 'center',
            marginTop:10,
          }}>
            
            <TouchableOpacity style={{
                  flexDirection:'row', borderWidth:1, borderColor:'white', padding:5,backgroundColor:'#0099FF',borderRadius:20,
                  paddingLeft:70,
                  paddingRight:70,
                }}>
                   <Octicons name="search" size={18} color="white" />
            <Text style={{
              color:'white',
              marginLeft:5,
            }}>Nhập từ khóa tìm kiếm</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{
                  marginLeft:15,
                }}>
                   <Octicons name="filter" size={18} color="white" />
          </TouchableOpacity>
        </View>        
        </View>
      </View>
      <View style={styles.box2}>
        <View style={{
          flex:1,
          backgroundColor:'violet',
          alignItems:'center',
          justifyContent: 'center',
        }}>
            <CA1></CA1>
        </View>
        <View style={{
          flex:0.8,
          backgroundColor:'white',
          flexDirection:'row',
          justifyContent: 'space-between',
        }}>
          <View>
            <TouchableOpacity>
              <View style={{
                borderWidth:1,
                width:45,
                height:45,
                alignItems:'center',
                justifyContent: 'center',
                borderRadius:50,
                backgroundColor:'white',
                marginLeft:20,
                marginTop:10,
              }}>
                  <AntDesign name="appstore-o" size={30} color="#00AA00" />
              </View>
              <Text style={{
                fontSize:17,
                marginLeft:20,
                marginTop:5,
                //fontWeight:'bold'
              }}>Tất cả</Text>
            </TouchableOpacity>
          </View> 
          <View>
            <TouchableOpacity>
            <View style={{
                borderWidth:1,
                width:45,
                height:45,
                alignItems:'center',
                justifyContent: 'center',
                borderRadius:50,
                backgroundColor:'white',
                marginLeft:20,
                marginTop:10,
                borderColor:'black',
              }}>
                  <XEGA></XEGA>
              </View>
              <Text style={{
                fontSize:17,
                marginLeft:10,
                marginTop:5,
                //fontWeight:'bold'
              }}>Xe tay ga</Text>
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity>
            <View style={{
                borderWidth:1,
                width:45,
                height:45,
                alignItems:'center',
                justifyContent: 'center',
                borderRadius:50,
                backgroundColor:'white',
                marginLeft:10,
                marginTop:10,
                borderColor:'black',
              }}>
                  <XEMSO></XEMSO>
              </View>
              <Text style={{
                fontSize:17,
                marginLeft:10,
                marginTop:5,
                //fontWeight:'bold'
              }}>Xe số</Text>
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity>
            <View style={{
                borderWidth:1,
                width:45,
                height:45,
                alignItems:'center',
                justifyContent: 'center',
                borderRadius:50,
                backgroundColor:'white',
                marginLeft:15,
                marginRight:15,
                marginTop:10,
                borderColor:'black',
              }}>
                  <PKL></PKL>
              </View>
              <Text style={{
                fontSize:17,
                marginLeft:8,
                marginTop:5,
                //fontWeight:'bold'
              }}>Xe PKL</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{
          flex:3,
          backgroundColor:'violet',
        }}>
          <View>
            {/* <VISION1></VISION1> */}
          </View>
          <View>
            
          </View>
        </View>
      </View>
      <View style={styles.box3}>
        <View style={{
          flexDirection:'row',
          paddingTop:8,
          justifyContent: 'space-between',
          marginRight:15,
          marginLeft:15,
        }}>
        <TouchableOpacity style={{
          
        }}>
          <FontAwesome name="home" size={40} color="#00CCCC" />
          <Text style={{
              marginLeft:-9,
              color:'#00CCCC',
          }}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          paddingTop:5,
        }}>
          <Fontisto name="shopping-store" size={32} color="#00CCCC" />
          <Text style={{
            paddingTop:3,
              marginLeft:-10,
              color:'#00CCCC',
            }}>Cửa hàng</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{
          
        }}>
          <MaterialIcons name="add-box" size={40} color="#00CCCC" />
          <Text style={{
              marginLeft:-6,
              color:'#00CCCC',
            }}>Đăng tin</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{
          
        }}>
          <MaterialIcons name="library-books" size={40} color="#00CCCC" />
          <Text style={{
            marginLeft:8,
            color:'#00CCCC',
            }}>Blog</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{
          
        }}>
          <FontAwesome name="user" size={40} color="#00CCCC" />
          <Text style={{
              marginLeft:-15,
              color:'#00CCCC',
            }}>Tài khoản</Text>
        </TouchableOpacity>
        
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'white',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
  box1: {
    flex: 1.2,
    backgroundColor: '#00CCFF',
  },
  box2: {
    flex: 4.8,
    backgroundColor: 'white',
  },

  
  box3: {
    flex: 0.8,
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderColor:'white',
    borderWidth:2,
  },
});

