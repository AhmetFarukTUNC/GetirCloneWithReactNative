import React from "react";

import { View,Text,Image, ViewComponent } from "react-native";
import styles from "./styles";

import {Entypo} from "@expo/vector-icons";





function index() {
    return (
        <View style={styles.headerMain}>
        <View style={styles.headerOne}>
        <Image source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}} style={styles.image}/>
        <View style={styles.headerOneView}>
            <Text style={{fontWeight:"600",fontSize:16}}>Ev</Text>
            <Text style={{fontWeight:"500",fontSize:11.5,color:"#6E7480",marginLeft:6,marginRight:2}}>Dedepaşa Blv. Yenişehir mahallesi...</Text>
            <Entypo name="chevron-right" size={22} color= "black" />
        </View>
        <View style={styles.headerTwo}>
            <Text style={{fontSize:10,fontWeight:"bold",color:"#5D3EBD"}}>TVS</Text>
            <Text style={{fontSize:20,fontWeight:"bold",color:"#5D3EBD",}}>13<Text style={{fontSize:16,color:"#5D3EBD",alignItems:"center"}}>dk</Text></Text>
            
        </View>
        </View>
        <View>
        </View>
        </View>
    )
}

export default index

