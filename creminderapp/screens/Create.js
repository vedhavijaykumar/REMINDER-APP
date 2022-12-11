
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { Header } from 'react-native-elements';
import Note from '../components/Note'
import Day from '../components/Day'
import AppHeader from '../components/AppHeader'
//import DateTimePickerTest from './DateTimePickerTest'
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
let customFonts = {
  "AbrilFatface-Regular": require("../assets/fonts/AbrilFatface-Regular.ttf")
};

export default class Create extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          fontsLoaded: false,
          datevalue:"",
            noteArray: [],
            noteText: '',
            dayArray:[],
            dayText:''
            
        }
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
//setTimeout( function ( ) { alert( "Reminder: Finish your tasks" ); }, 3600000 );
        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteNote(key)}
                
                 
           />
        })
 let days = this.state.dayArray.map((val, key) => {
            return <Day key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteDay(key)}

/>
 })
        return (
          <ImageBackground
        style={{flex: 1}}
        source={{
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzKQDCdICLNYCGrNVPBxOAnK5G0Skdf4hIQ&usqp=CAU'    
        }}>
            <View style={styles.container}>
            <AppHeader/>
             <View style={styles.scrollContainer}>
                    {notes}
               </View>

                <View style={styles.footer}>
               <TouchableOpacity onPress={this.addTask.bind(this) }                                 style={styles.addButton} >
                  
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
               
              
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholder='Task'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
             
           
               
                 
            </View>
             </ImageBackground>  
        );
    }

    addTask() {
        if (this.state.noteText) {
            var date = new Date()
           
            this.state.noteArray.push({
              'note':this.state.noteText,
               'date' : date.getFullYear()+
               '/' +(date.getMonth() + 1)+
               '/' + date.getDate()+
                ','+date.getHours()+":"+
                 date.getMinutes()+":"+
                 date.getSeconds()
              
            });

            this.setState({noteArray: this.state.noteArray});
            this.setState({noteText:this.state.noteText});
        }

    }

    deleteNote(key){
        this.state.noteArray.splice(key,1);
        this.setState({noteArray:this.state.noteArray});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
   
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        zIndex: 10,
        width: "50%",
        
    },
    textInput: {
      padding: 20,
      position: 'absolute',
        bottom: 30,
      backgroundColor: '#ffb366',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
        alignSelf: 'left',
        color: 'white',
           fontSize:18,
       fontFamily:  "AbrilFatface-Regular",
     
     
    },

  
    addButton: {
      width: '30%', 
      height: 50, 
      borderRadius:30,
      backgroundColor: 'white', 
      justifyContent: 'center', 
      alignItems: 'center',
      top:50,
       right:0,
       left:150
      
   
    },
    addButtonText: {
        color:"black",
        fontSize: 16,
         fontFamily:  "AbrilFatface-Regular",
        justifyContent:'center',
       

    },
});
