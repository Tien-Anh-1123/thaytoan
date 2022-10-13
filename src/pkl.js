import React from 'react';
import {Image} from 'react-native'


export default function PKL() {
    return (
      <Image source={require("../img/pkl.png")  } style={{width: 43, height: 31, borderWidth:1,borderRadius:50,borderColor:'white', }}></Image>  
    );
  }