import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Bangkok', code: '10100' },
    { place: 'Phuket', code: '83000' },
    { place: 'Songkla', code: '90000' },
    { place: 'Lampang', code: '52000' },
    { place: 'Kabi', code: '80240' },
]
const ZipItem = ({ place, code, navigate }) => (
    <TouchableHighlight onPress={() => navigate('Weather', { zipCode: code })}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code
export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text>Choose a zip code</Text>),
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    zipItem: { flexDirection: 'row', margin: 20 },
    zipPlace: { flex: 2 },
    zipCode: { flex: 2 }
});