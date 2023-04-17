import React from "react"
import {Text, View, TouchableOpacity} from "react-native";
import {styles} from "./styles"
import { IPage } from "../../../App";

export function Page2({setPageI}:IPage) {

    return (
        <View style={styles.container}> 
            <Text>Pagina 2</Text>
        
        <TouchableOpacity onPress={()=> setPageI(1)}>
            <Text style={styles.Text}>{'<<'}</Text>
        </TouchableOpacity>
     

         </View>
    )
     

}