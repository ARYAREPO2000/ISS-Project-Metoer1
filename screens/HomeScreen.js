import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Platform, StatusBar, ImageBackground, Image} from 'react-native';

export default class HomeScreen extends React.Component {
    render(){
    return (
      <View style={styles.container}>
        <SafeAreaView style = {styles.droidSafeArea}/>
        <ImageBackground source={require("../assets/bg_image.png")} style={styles.background}>
        
        <View style={styles.titleBar}><Text style={styles.titleText}>ISS TRACKER APP</Text></View>
        

        <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("ISS_Location")}>
          <Text style={styles.routeText}>ISS_Location</Text>
          <Text style={styles.knowMore}>{"know more ---->"}</Text>
          <Text style={styles.Digit}>1</Text>
          <Image source={require("../assets/iss_icon.png")} style={styles.iconStyle}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard } onPress={()=>this.props.navigation.navigate("MeteorTracker")}>
          <Text style={styles.routeText}>MeteorTracker</Text>
          <Text style={styles.knowMore}>{"know more ---->"}</Text>
          <Text style={styles.Digit}>2</Text>
          <Image source={require("../assets/meteor_icon.png")} style={styles.iconStyle}></Image>
        </TouchableOpacity>
        </ImageBackground>
      </View>
      
    );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    droidSafeArea:{
      marginTop:Platform.OS === 'android'? StatusBar.currentHeight:0
    },
    titleBar:{
      flex:0.15,
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      
    },

    titleText:{
      fontSize:40,
      fontWeight:'bold',
      color:'white'
    },
    
    routeCard:{
      flex:0.25,
      marginLeft:50,
      marginRight:50,
      marginTop:50,
      borderRadius:20,
      backgroundColor:'white',
      },

    routeText:{
      fontSize:20,
      color:'black',
      marginTop:70,
      paddingLeft:30,
      fontWeight:'bold'
    },

    background:{
      flex:1,
      resizeMode:"cover"
    },

    knowMore:{
      color:'red',
      paddingLeft:30,
      fontSize:30
    },

    Digit:{
      position:'absolute',
      color:"grey",
      fontSize:100,
      right:20,
      bottom:-15,
      zIndex:-1,
    },

    iconStyle:{
      position:'absolute',
      height:150,
      width:150,
      resizeMode:'contain',
      right:30,
      bottom:80,
    }

  });
  