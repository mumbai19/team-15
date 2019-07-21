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


export default class RegisterScreen extends React.Component {
    constructor(props){
        super(props),
        this.state = {
            user_name: '',
            user_email: '',
            user_contact: '',
            user_password: '',
            user_address: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    value={this.state.user_name}
                    onChangeText={(user_name) => this.setState({ user_name })}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.user_email}
                    onChangeText={(user_email) => this.setState({ user_email })}
                    placeholder={'Email'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.user_contact}
                    onChangeText={(user_contact) => this.setState({ user_contact })}
                    placeholder={'Contact'}
                    style={styles.input}
                />
                <TextInput multiline={true}
                           numberOfLines={5}
                           placeholder={'Enter your Address'}
                           onChangeText={(user_address) => this.setState({user_address})}
                           style={styles.input}/>


                <TextInput
                    value={this.state.user_password}
                    onChangeText={(user_password) => this.setState({ user_password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <Button
                    title={'Register'}
                    style={styles.inputButton}
                    // onPress={}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    // container:{
    //   display: 'flex',
    // },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    titleText:{
        fontSize: responsiveFontSize(3)
    },
    quote:{
        fontStyle: 'italic'
    },
    innerContainer:{
        width: responsiveWidth(50),
        height: responsiveHeight(50),
        // borderColor: 'red'
        display: 'flex'
    },
    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderBottomWidth: 1,
    },
    emailDiv:{
        // display:'flex',
        flexDirection: 'row'
    },
    passwordDiv:{
        // display:'flex',
        flexDirection: 'row'
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    inputButton:{
        width: 200,
        height: 44,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        // marginTop: responsiveHeight(20),
        // paddingTop: responsiveHeight(30)
    }
});