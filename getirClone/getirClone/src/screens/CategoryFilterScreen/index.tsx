import React, { useState } from 'react'
import { ScrollView,Text } from 'react-native'
import CategoryFiltering from "../../components/CategoryFiltering"
import { Category } from '../../models'

import TypeFiltering from "../../components/TypeFiltering"
import { TouchableOpacity } from 'react-native-gesture-handler'



function index(props) {
const [category,setCategory] = useState<Category>(props.route.params.category)
  return (  
    <ScrollView>
        <CategoryFiltering category={category}/>
        <TypeFiltering />
    </ScrollView>
  )
}

export default index