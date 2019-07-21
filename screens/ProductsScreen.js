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
} from 'react-native';
import {responsiveHeight} from "react-native-responsive-dimensions";
import {createAppContainer, createStackNavigator} from "react-navigation";
import CampaignScreen from "./CampaignScreen";
import CampaignDonateScreen from "./CampaignDonateScreen";
// import PaymentProceed from "./PaymentProceed";
import ProductDetails from "./ProductDetails";
import ProductView from "./ProductView";

const CampaignStack=createStackNavigator({
    ProductDetails:{
        screen:ProductDetails
    },
    ProductView:{
        screen:ProductView
    },
    // PaymentProceed:{
    //     screen: PaymentProceed
    // }
},{
    headerMode:'none',
    navigationOptions:{
        headerVisible:false,
    }
});

const Container=createAppContainer(CampaignStack);

export default class ProductsScreen extends  React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Container/>
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
        paddingTop: responsiveHeight(5),
        backgroundColor: '#eee'

    },

});
