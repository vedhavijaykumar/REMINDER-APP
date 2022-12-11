import React, { Component } from 'react';
import { Text, TouchableOpacity, View,
StyleSheet ,Platform} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
export default class DateTimePickerTest extends Component {
  state = {
    isDateTimePickerVisible: false,
    isTimePickerVisible:false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });


  _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });



  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };


  _handleTimePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideTimePicker();
  };

  render () {
    return (
      <View  style={styles.container}>
        <TouchableOpacity  onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
       <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          onChange={(event, value) => {
                            this.setState({
                                dateOrTimeValue: value,
                                isdateTimePickerVisible: Platform.OS === 'android' ? true : false,
                            });

                            if (event.type === "set")
                                console.log("value:" , value);
                        }}
        />
      
      

        <TouchableOpacity onPress={this._showTimePicker}>
          <Text>Show TimePicker</Text>
        </TouchableOpacity>
       <DateTimePickerModal
          mode="time"
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this._handlePicked}
          onCancel={this._hideTimePicker}
          onChange={(event, value) => {
                            this.setState({
                                dateOrTimeValue: value,
                                isTimePickerVisible: Platform.OS === 'android' ? true : false,
                            });

                            if (event.type === "set")
                                console.log("value:" , value);
                        }}
        />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom:100,
      marginLeft:150,
    },
})


