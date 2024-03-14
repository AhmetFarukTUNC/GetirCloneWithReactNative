import React, { useState } from 'react'
import { ScrollView,Text, Dimensions, TouchableOpacity} from 'react-native'

const {height,width} = Dimensions.get("window")

const TypeBox = ({item,active}:{item:string,active:string})=>{
    return(
      <TouchableOpacity style={[{paddingHorizontal:10,borderRadius:6,height:height*0.040,marginRight:12,flexDirection:"row",alignItems:"center"},item==active ? {backgroundColor:"#5C3EBC"}:{borderColor:"#6B7287",borderWidth:1}]}>
        <Text style ={{fontSize:12,color:"#7849F7",fontWeight:"600"}}>{item}</Text>
      </TouchableOpacity>
      
    )
  }

function index() {
    const [category,setCategory] = useState<String>("Birlikte iyi gider")
  return (
    <ScrollView style={{width:"100%",backgroundColor:"white",height:height*0.072,flexDirection:"row",paddingVertical:height*0.014}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
        {["Birlikte iyi gider","Çubuk","Kutu","Külah","Çoklu","Bar"].map((item) => (
            <TypeBox item={item} active={category}/>
        ))}
    </ScrollView>
  )
}

export default index