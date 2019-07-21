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


export default class CampaignDonateScreen extends React.Component {
    constructor(props){
        super(props),
            this.state = {
            }

    }

    paymentFunction=()=>{
        // var settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "https://test.instamojo.com/api/1.1/payment-requests/",
        //     "method": "POST",
        //     "headers": {
        //         "X-Api-Key": "test_c82215f199bae810566b032e1a1",
        //         "X-Auth-Token": "test_bc194ece82566cf999afb92f27c",
        //         "Content-Type": "application/x-www-form-urlencoded",
        //         "Cache-Control": "no-cache",
        //         "Postman-Token": "52eb484e-38c3-4b33-b858-e5d6ef1a6914"
        //     },
        //     "data": {
        //         "allow_repeated_payments": "False",
        //         "amount": "999",
        //         "buyer_name": "suyog",
        //         "purpose": "Bag",
        //         "redirect_url": "https://www.facebook.com/",
        //         "phone": "7666196382",
        //         "send_email": "True",
        //         "webhook": "https://www.facebook.com/?order_id=1234",
        //         "send_sms": "True",
        //         "email": "jaindamnik203@gmail.com"
        //     }
        // }
        //
        // $.ajax(settings).done(function (response) {
        //     console.log(response);
        // });


        //

//         fetch('https://test.instamojo.com/api/1.1/payment-requests/',{
//             method: 'POST',
//             headers:{
//
//             },
//             body: JSON.stringify({
//                 "allow_repeated_payments": "False",
//                 "amount": "999",
//                 "buyer_name": "suyog",
//                 "purpose": "Bag",
//                 "redirect_url": "https://www.facebook.com/",
//                 "phone": "7666196382",
//                 "send_email": "True",
//                 "webhook": "https://www.facebook.com/?order_id=1234",
//                 "send_sms": "True",
//                 "email": "jaindamnik203@gmail.com"
//             })
//         }).then((response)=> response.json())
//             .then((responseJson) => {
//
// // Showing response message coming from server after inserting records.
//                 Alert.alert(responseJson);
//
//             }).catch((error) => {
//             console.error(error);
//         });

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{borderBottomWidth: 1}}>
                    <Text style={{fontWeight: '500', fontSize: responsiveFontSize(2), marginLeft: responsiveWidth(12)}}>Trishul - <Text style={styles.tagLine}>Inspire Empower Achieve</Text></Text>
                </View>
                <View style={styles.longText}>
                    <Text style={{fontSize: responsiveFontSize(3), marginBottom: responsiveHeight(1)}}>Campaign Name : Kerala Floods</Text>
                    <Text>Cause : It is the initiate to help the needy people who suffered from disastrous Floods in Kerala.
                        Over 100 of people lost their house, many were injured and few died. Lets help them by contributing.</Text>
                </View>
                <Button
                    title={'Proceed to Pay'}
                    style={styles.inputButton}
                    onPress={()=> this.props.navigation.navigate('PaymentProceed')}
                    // onPress={()=>this.paymentFunction}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // paddingTop: responsiveHeight(5),
        backgroundColor: '#eee'
    },longText:{
        marginTop: responsiveHeight(4),
        marginLeft: responsiveWidth(2),
        fontSize: responsiveFontSize(2)
    },
    inputButton:{
        borderBottomWidth: 1,
        marginBottom: responsiveHeight(3),
        marginTop: responsiveHeight(2),
        // paddingTop: responsiveHeight(30)
    }
});