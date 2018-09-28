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
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=1d2822a6e2fc38ebd9bb825f2dda2cca`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                        }
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    componentDidMount = () => this.fetchData()
    componentDidUpdate = (prevProps) => {
        if (prevProps.zipCode !== this.props.zipCode) {
            this.fetchData()
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
                    <ImageBackground source={require('../dark_grey_-_prisma_grande.jpg')} style={styles.backdrop2}>
                        <View style={styles.flexbox} >



                            <Text style={{ color: 'white', fontSize: 30, opacity: 0.5,margin:20}}>Zip code is {this.props.zipCode}.</Text>


                            <Forecast {...this.state.forecast} />
                        </View>

                    </ImageBackground>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%' },
    backdrop2: { width: '100%', height: '50%', opacity: 0.7 },
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
