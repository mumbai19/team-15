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
                    onPress={()=> this.props.navigation.navigate('Home')}
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