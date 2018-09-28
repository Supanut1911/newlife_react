import React from 'react';
import Forecast from './Forecast';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { white } from 'ansi-colors';
export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', description: '-', temp: 0
            }
        }

    }
    doIt = () => {
        console.log("Hello from console")
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
                    <View style={styles.flexbox}>



                        <Text >Zip code is {this.props.zipCode}.</Text>


                        <Forecast {...this.state.forecast} />
                    </View>

                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%' },
    flexbox:
    {
        flex: 1,
        flexDirection: 'column',
        /*justifyContent: 'center',*/
        alignItems: 'center',
        /*opacity:0.5,*/
        //backgroundColor:'grey',
    },




});
