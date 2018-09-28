import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View >
                <Text >{this.props.main}</Text>
                <Text >{this.props.description}</Text>
                <Text >{this.props.temp}°C</Text>

            </View>
        );
    }
}
