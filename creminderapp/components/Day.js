import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class Day extends React.Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.day}>
                <Text style={styles.dayText}>{this.props.val.date}</Text>
                <Text style={styles.dayText}>{this.props.val.day}</Text>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.dateDelete}>
                    <Text style={styles.dateDeleteText}>Del</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    day: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    dayText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63',
    },
    dayDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    dayDeleteText: {
        color: 'white',
    }
})
