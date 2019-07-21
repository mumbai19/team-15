import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    WebView
} from 'react-native';
import {responsiveHeight} from "react-native-responsive-dimensions";
import {createAppContainer, createStackNavigator} from "react-navigation";
import CampaignScreen from "./CampaignScreen";
import CampaignDonateScreen from "./CampaignDonateScreen";
// import PaymentProceed from "./PaymentProceed";
import ProductDetails from "./ProductDetails";
import ProductView from "./ProductView";



export default class ProductsScreen extends  React.Component{
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: 'https://www.google.com'}}
                    style={{marginTop: 20}}
                />
            </View>
        );
    }
}

// DeliveryHotelDetails.navigationOptions = {
//     header: null,
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: responsiveHeight(5),
        backgroundColor: '#eee'

    },

});
