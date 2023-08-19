import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Platform, StatusBar, ImageBackground, Image, Alert} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import axios from 'axios'

export default class ISS_LocationScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={location:{}}
  }

  getISSLocation=()=>{
    axios.get("https://api.wheretheiss.at/v1/satellites/25544")
    .then((response)=>{this.setState({location:response.data})})
    .catch((error)=>{console.log(error.message);
      Alert.alert(error.message) })

  }

  componentDidMount(){
    this.getISSLocation();
  }



    render(){
      if (Object.keys(this.state.location).length === 0 ) {
        return(
          <View style={styles.container}>
            <Text>
                Loading....
            </Text>
          </View>
        )
      }
      else{

      
    return (
      <View style={styles.container}>
        <SafeAreaView style = {styles.droidSafeArea}/>
        <ImageBackground source={require("../assets/iss_bg.jpg")} style={styles.background}>
          <View style={styles.titleBar}><Text style={styles.titleText}>ISS Location Screen</Text></View>
          <MapView 
          initialRegion={{
            latitude:this.state.location.latitude,
            longitude:this.state.location.longitude,
            latitudeDelta:100,
            longitudeDelta:100,
          }}  
          >
            <Marker coordinate={{
            latitude:this.state.location.latitude,
            longitude:this.state.location.longitude
            }}>
              <Image>source={require("../assets/iss_icon.png")} style={{height:50,width:50}}</Image>
            </Marker>
          </MapView>

        </ImageBackground>
      </View>
    );
   };
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
      fontSize:30,
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
  
  