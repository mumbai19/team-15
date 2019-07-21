import React from 'react';
import {
    Button,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View, WebView,
} from 'react-native';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";


export default class PaymentProceed extends React.Component {
    constructor(props){
        super(props),
            this.state = {

            }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{borderBottomWidth: 1}}>
                    <Text style={{fontWeight: '500', fontSize: responsiveFontSize(2), marginLeft: responsiveWidth(12)}}>Trishul - <Text style={styles.tagLine}>Inspire Empower Achieve</Text></Text>
                </View>
                <Text>
                    Welcome to the payment page
                </Text>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // paddingTop: responsiveHeight(5),
        backgroundColor: '#eee'
    },inputButton:{
        borderBottomWidth: 1,
        // borderColor: 'black',
        marginBottom: responsiveHeight(10)
        // marginTop: responsiveHeight(20),
        // paddingTop: responsiveHeight(30)
    }
});