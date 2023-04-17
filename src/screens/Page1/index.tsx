import { Text, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { IPage } from "../../../App"

export function Page1({setPageI}:IPage) {
    
    return (
    <View style={styles.container}> 
        <Text>Pagina 1</Text>
      
      <TouchableOpacity onPress={()=> setPageI(2)}>
           <Text style={styles.Text}>{"<<"}</Text>
      </TouchableOpacity>

   </View>
    )


}