import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View style={{ opacity: 0.5 }}>
                <Text style={{ color: 'white', fontSize: 30 ,textAlign:'center' ,margin:20}}>{this.props.main}</Text>
                <Text style={{ color: 'white', fontSize: 30, textAlign: 'center', margin: 20}}>{this.props.description}</Text>
                <Text style={{ color: 'white', fontSize: 30, textAlign: 'center', margin: 20}}>{this.props.temp}°C</Text>

            </View>
        );
    }
}
