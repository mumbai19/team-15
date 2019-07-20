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


export default class DonatedScreen extends React.Component {
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
                <ScrollView horizontal={false}>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('DeliveryHotelDetails')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('DeliveryHotelDetails')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('DeliveryHotelDetails')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('DeliveryHotelDetails')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('DeliveryHotelDetails')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('DeliveryHotelDetails')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity title={'Phase 1'}
                                      onPress={() => this.props.navigation.navigate('DeliveryHotelDetails')}
                                      style={styles.infoContainer}>

                        <Image style={styles.image}
                               source={{uri: "https://image.shutterstock.com/image-vector/smiling-pizza-delivery-courier-boy-260nw-1023156019.jpg"}}/>
                        <View styles={styles.hotelInfoContainer}>
                            <Text>Hotel Name</Text>
                            <Text>Hotel Address</Text>
                            <Text>Average Cost</Text>

                        </View>

                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: responsiveHeight(5),
    },
    dealImages:{
        width:responsiveWidth(40),
        height:responsiveHeight(30),
        marginRight:responsiveWidth(1),
    },
    dealText:{
        color:'white',
        paddingHorizontal:responsiveWidth(2),
    },
    dealsContainer:{
        // height: responsiveHeight(3),
        paddingBottom:responsiveHeight(2),
        // backgroundColor:'#eee',
        paddingTop: responsiveHeight(2),
        // borderBottomWidth: 1,
        // paddingBottom: responsiveHeight(1),
    },
    infoContainer:{
        flexDirection:'row',

        paddingHorizontal:responsiveWidth(4),
        paddingVertical:responsiveHeight(2)
    },
    image:{
        marginLeft: responsiveWidth(3),
        width:responsiveWidth(25),
        height:responsiveWidth(35)
    }
});