import React,{useState} from 'react'
import { Text, View,Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import categoriesGetir from '../../../assets/categoriesGetir'
import { Category } from '../../models'
const {height,width} = Dimensions.get("window")

const CategoryBox = ({item,active}:{item:Category,active:Category} ) =>{
    return(
        <View style={[{flexDirection:"row",alignItems:"center",paddingHorizontal:9,
        alignContent:"center",
        
        },
        item.name==active.name && {borderBottomColor:"white",borderBottomWidth:2.5}]
        }>
            <Text style={{fontSize:14,color:"white",fontWeight:"600"}}>{item.name}</Text>
        </View>
    )
}

function index({category}:{category:Category}) {
    const [categories,setCategories] =useState<Category[]>(categoriesGetir)  
    return (
   <ScrollView showsHorizontalScrollIndicator={false} bounces={true} horizontal={true} style={{width:"100%",backgroundColor:"#7849F7",height:height*0.065}}>
      {
        categories.map((item)=>(
            <CategoryBox item={item} active={category} key={item.id}/>
        ))
      }
      
      
   </ScrollView>
  )
}

export default index