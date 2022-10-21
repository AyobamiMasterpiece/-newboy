import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground, Pressable} from 'react-native';

export default function Modal1() {
  return (
    <View style={styles.container}>
      <View
      style={{flex:1,backgroundColor:'white'}}
      >
        <ImageBackground source={require('../teenchrist/images/imagesmm.jpg')} style={{flex:1}} resizeMode='stretch'>
 <View style={{marginTop:130}}>
 <Text style={{textAlign:'right',marginRight:46}}>Ayoti Technologies,</Text>
 <Text style={{textAlign:'right',marginRight:120}}>Surulere</Text>
 <Text style={{textAlign:'right',marginRight:82}}>Lagos, Nigeria</Text>
 <Text style={{textAlign:'right',marginRight:60}}>7th August 2022.</Text>

<View style={{flexDirection:'row'}}>

<Text style={{marginLeft:14,fontSize:25}}>D</Text>
<Text style={{marginLeft:5,marginTop:14,marginLeft:0}}>ear Teen,</Text>
</View>
 
<Text style={{marginLeft:6, fontStyle:'italic',fontSize:15}} >Greetings from the lord Jesus christ,with a sense of humility and brotherliness I write 
this letter to u. I know what it is like to stand out as a teenager for christ in this perverse generation.It gets tougher by the day,
it seems you are the odd one out.THE LORD knows all what u go through and He wont stop helping you,the Holy spirit is always there to
guide u.Each day just take up your cross and follow Jesus.Remember to love everyone,and the love is what am spreading out with these 
App I made.I strongly believe this app will help in your journey as a child of GOD.I pray you benefit well from it and u grow faster 
as you use it.
GOD bless u more and more.
The grace of GOD be with u forever and ever.Amen



</Text>
<Text style={{textAlign:'right',marginLeft:40,marginRight:10}}>Your Friend and Brother</Text>
 <Text style={{textAlign:'right',marginRight:120}}>Ayoti</Text>
 <Text style={{textAlign:'right',marginRight:82}}></Text>
 

 </View>


  <View style={{justifyContent:'center',alignItems:'center',paddingLeft:10}}>


  
 </View>
 <View style={{marginTop:55,flex:1,alignItems:'center',justifyContent:'center'}}>
      <Pressable
 style={({pressed})=>[{backgroundColor:pressed?'white':'red'},{borderRadius:120,paddingHorizontal:50}]}
 >
   <Text style={{fontSize:20,padding:10}}>Let's Begin The Journey</Text>


 </Pressable>
 </View>
        </ImageBackground>
        
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    
  },
});
