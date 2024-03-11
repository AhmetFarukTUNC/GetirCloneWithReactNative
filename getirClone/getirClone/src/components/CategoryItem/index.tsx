import React from "react";

import { TouchableOpacity,Image,Text,Dimensions } from "react-native";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";
const {width,height} = Dimensions.get("window")
type categoryItemProps ={
    item:Category 
}
function index({item}:categoryItemProps) {
    const navigation = useNavigation()
    return(
    <TouchableOpacity style={{width:width*0.25,height:width*0.24,marginTop:10,flexDirection:"column",alignItems:"center",justifyContent:"space-between"}} onPress={()=>navigation.navigate("CategoryDetails",{category:item})}>
        <Image source={{uri:item.src}} style={{width:width*0.18,height:width*0.18,borderRadius:8,}} />
        <Text style={{color:"#616161",fontSize:12,fontWeight:"500"}}>{item.name}</Text>
    </TouchableOpacity>
    )
    
}

export default index