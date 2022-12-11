import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
let customFonts = {
  "AbrilFatface-Regular": require("../assets/fonts/AbrilFatface-Regular.ttf")
};

class AppHeader extends React.Component{
  constructor(props) {
        super(props);

        this.state = {
          fontsLoaded: false,
          datevalue:"",
            noteArray: [],
            noteText: '',
            
        }
    }
    async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render(){
    return(
      <View >
        <Text style={styles.text}>REMINDER APP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  text:{
    color:'white',
    padding: 25,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:  "AbrilFatface-Regular",
     
  }
});

export default AppHeader;