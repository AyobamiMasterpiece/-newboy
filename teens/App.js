import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native';

export default function App() {

  const[ripple,setripple]=useState(false);
  const[text,settext]=useState('')
  const array=[]
  return (
    <View style={styles.container}>
      <View style={styles.cac}>
        <View style ={{backgroundColor:'red', flex:0.3}}> 
        
        <Text style={{fontSize:32}}>{text}</Text>
        
        </View>
       
      </View>
    
      <StatusBar  />
      <View style={styles.press}>


      
      <View style= {styles.rows}>
  <TouchableNativeFeedback
  onPress={()=>{
    settext('')
    setripple(!ripple)
  }}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>C</Text>
      </View>  
      </TouchableNativeFeedback>

     
      <TouchableNativeFeedback
  onPress={()=>{ settext(text/text)
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>/</Text>
      </View>  
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
  onPress={()=>{settext(text+'*')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>*</Text>
      </View>  
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
  onPress={()=>{settext(text +'/')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={[styles.text]}>X</Text>
      </View>  
      </TouchableNativeFeedback>






      </View>








































      
<View style= {styles.rows}>
  <TouchableNativeFeedback
  onPress={()=>{settext(text+'7')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>7</Text>
      </View>  
      </TouchableNativeFeedback>

     
      <TouchableNativeFeedback
  onPress={()=>{settext(text+'8')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>8</Text>
      </View>  
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
  onPress={()=>{settext(text+'9')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>9</Text>
      </View>  
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
  onPress={()=>{setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={[styles.text]}>-</Text>
      </View>  
      </TouchableNativeFeedback>






      </View>










      
      <View style= {styles.rows}>
  <TouchableNativeFeedback
  onPress={()=>{settext(text+'4')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>4</Text>
      </View>  
      </TouchableNativeFeedback>

     
      <TouchableNativeFeedback
  onPress={()=>{settext(text+'5')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>5</Text>
      </View>  
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
  onPress={()=>{settext(text+'6')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>6</Text>
      </View>  
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
  onPress={()=>{settext(text+'+')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={[styles.text]}>+</Text>
      </View>  
      </TouchableNativeFeedback>






      </View>



      
      <View style= {styles.rows}>
  <TouchableNativeFeedback
  onPress={()=>{settext(text+'1')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>1</Text>
      </View>  
      </TouchableNativeFeedback>

     
      <TouchableNativeFeedback
  onPress={()=>{settext(text+'2')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>2</Text>
      </View>  
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
  onPress={()=>{settext(text+'3')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={[styles.text,{marginLeft:6}]}>3</Text>
      </View>  
      </TouchableNativeFeedback>


<View  style={{backgroundColor:'black',marginLeft:35,padding:16,marginTop:5,borderRadius:10,paddingBottom:29}}>
<TouchableNativeFeedback
  onPress={()=>{settext(text+'=')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('pink',ripple)}
  
  >
    
    <Text style={styles.text}>=</Text>
    
      </TouchableNativeFeedback>

</View>


      </View>









      
      <View style= {styles.rows}>
  <TouchableNativeFeedback
  onPress={()=>{settext(text+'%')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>%</Text>
      </View>  
      </TouchableNativeFeedback>

     
      <TouchableNativeFeedback
  onPress={()=>{settext(text+'0')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>0</Text>
      </View>  
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
  onPress={()=>{settext(text+'.')
    setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>.</Text>
      </View>  
      </TouchableNativeFeedback>




      </View>
























































      














      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'pink'
    
    
  },
  cac:{
flex:1,
backgroundColor:'white',
justifyContent:'flex-end'

  },
  press:{
    flex:1.3,
    backgroundColor:'darkblue',
    
    
  },
  text:{
    fontSize:24,
    color:'white'
    
  },
  textcontainer:{
margin:25,
marginLeft:35

  },
  rows:{
    flexDirection:'row'
  }
});
////////////////////////////////









/////////////////////////
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

export default function App() {

  const[ripple,setripple]=useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.cac}></View>
    
      <StatusBar  />
      <View style={styles.press}>


      
<View style= {styles.rows}>
  <TouchableNativeFeedback
  onPress={()=>{setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>7</Text>
      </View>  
      </TouchableNativeFeedback>

     
      <TouchableNativeFeedback
  onPress={()=>{setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>8</Text>
      </View>  
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
  onPress={()=>{setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>9</Text>
      </View>  
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
  onPress={()=>{setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={[styles.text]}>-</Text>
      </View>  
      </TouchableNativeFeedback>






      </View>










      
      <View style= {styles.rows}>
  <TouchableNativeFeedback
  onPress={()=>{setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>4</Text>
      </View>  
      </TouchableNativeFeedback>

     
      <TouchableNativeFeedback
  onPress={()=>{setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>5</Text>
      </View>  
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
  onPress={()=>{setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>6</Text>
      </View>  
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
  onPress={()=>{setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={[styles.text]}>+</Text>
      </View>  
      </TouchableNativeFeedback>






      </View>



      
      <View style= {styles.rows}>
  <TouchableNativeFeedback
  onPress={()=>{setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>1</Text>
      </View>  
      </TouchableNativeFeedback>

     
      <TouchableNativeFeedback
  onPress={()=>{setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>2</Text>
      </View>  
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
  onPress={()=>{setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('black',ripple)}
  
  >
    <View style={styles.textcontainer}>
    <Text style={styles.text}>3</Text>
      </View>  
      </TouchableNativeFeedback>


<View style={{backgroundColor:'white',marginLeft:30,padding:16,marginTop:38,borderRadius:10,paddingBottom:29}}>
<TouchableNativeFeedback
  onPress={()=>{setripple(!ripple)}}
  background={TouchableNativeFeedback.Ripple('pink',ripple)}
  
  >
    
    <Text style={styles.text}>=</Text>
    
      </TouchableNativeFeedback>

</View>


      </View>


































      














      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'pink'
    
    
  },
  cac:{
flex:1,
backgroundColor:'white'
  },
  press:{
    flex:1.5,
    backgroundColor:'darkblue',
    
    
  },
  text:{
    fontSize:35
  },
  textcontainer:{
margin:25,
marginLeft:35

  },
  rows:{
    flexDirection:'row'
  }
});
