import React, { Component } from 'react';
import { Text, View ,StyleSheet,ImageBackground} from 'react-native';
import { Header } from 'react-native-elements';
import Create from './Create'


import AppHeader from '../components/AppHeader'
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

let customFonts = {
    "AbrilFatface-Regular": require("../assets/fonts/AbrilFatface-Regular.ttf")
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
          };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

    render() {
       if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }
        return (
 <ImageBackground
        style={{flex: 1}}
        source={{
          uri:"data:image/jpeg;base64,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"        
        }}>
          
            <View style={styles.container}>
               
               <AppHeader/>  
               <Text style={styles.text}>DAILY FACT</Text>
               <Text style={styles.texton}>Seals spend 90% of there life holding there breath.</Text>
              </View>
                </ImageBackground>
        )      
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom:300
    },
    text:{
    alignItems:'center',
    marginBottom:10,
    color:'white',
    fontSize:30,
    fontFamily:  "AbrilFatface-Regular",
    },
    texton:{
    alignItems:'center',
    marginTop:50,
    marginLeft:30,
    color:'lightblue',
    fontSize:25,
    fontFamily:  "AbrilFatface-Regular",
    bottom:100,
    },

    });