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
import {MaterialIcons} from "@expo/vector-icons";

export default class ProfileScreen extends React.Component {
    constructor(props){
        super(props),
            this.state = {

            }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{borderBottomWidth: 1, display:'flex', flexDirection:'row'}}>
                    {/*<MaterialIcons name={'grade'} size={responsiveFontSize(3.0)}/>*/}
                    <Text style={{fontWeight: '500', fontSize: responsiveFontSize(2), marginLeft: responsiveWidth(12)}}>Trishul - <Text style={styles.tagLine}>Inspire Empower Achieve</Text></Text>
                </View>
                <View style={{marginTop: responsiveHeight(8)}}>
                    <Button
                        title={'Create Campaign'}
                        style={{marginBottom: responsiveHeight(10)}}
                        onPress={()=> this.props.navigation.navigate('')}
                    />
                    <Button
                        title={'Delete Campaign'}
                        style={styles.inputButton}
                        onPress={()=> this.props.navigation.navigate('')}
                    />

                    <Button
                        title={'Delete User'}
                        style={styles.inputButton}
                        onPress={()=> this.props.navigation.navigate('')}
                    />

                    <Button
                        title={'Logout'}
                        style={styles.inputButton}
                        onPress={()=> this.props.navigation.navigate('')}
                    />
                </View>

                <View style={{marginTop:responsiveHeight(7)}}>
                    <Button
                        title={'Edit Profile'}
                        style={styles.inputButton}
                        onPress={()=> this.props.navigation.navigate('')}/>

                    <Button
                        title={'Pay now'}
                        style={styles.inputButton}
                        onPress={()=> this.props.navigation.navigate('')}
                    />

                    <Button
                        title={'Contact Us'}
                        style={styles.inputButton}
                        onPress={()=> this.props.navigation.navigate('')}
                    />
                    <Button
                        title={'Logout'}
                        style={styles.inputButton}
                        onPress={()=> this.props.navigation.navigate('')}
                    />

                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: responsiveHeight(5),
        backgroundColor: '#eee'
    },inputButton:{
        borderBottomWidth: 1,
        // borderColor: 'black',
        // justifyContent:'space-around',
        alignItems:'center',
        marginBottom: responsiveHeight(10),
        marginTop: responsiveHeight(20),
        // paddingTop: responsiveHeight(30)
    }
});
