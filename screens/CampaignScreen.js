import React from 'react';
import {
    Button,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";


export default class CampaignScreen extends React.Component {
    constructor(props){
        super(props),
            this.state = {

            }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text></Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});