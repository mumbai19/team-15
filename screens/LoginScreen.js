import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Button
} from 'react-native';

import {responsiveHeight, responsiveFontSize, responsiveWidth} from "react-native-responsive-dimensions";



export default class LoginScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user_email : '',
            user_password: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/*<Text style={styles.titleText}>Trishul - <Text style={styles.quote}>Inspire Empower Achieve</Text></Text>*/}
                    {/*<View style={styles.innerContainer}>*/}
                    {/*    <View style={styles.emailDiv}>*/}
                    {/*    <Text>Email</Text>*/}
                    {/*        <TextInput placeholder="Enter email"*/}
                    {/*                onChangeText={user_email => this.setState({user_email})}*/}
                    {/*               underlineColorAndroid='transparent'*/}
                    {/*               style={styles.TextInputStyleClass}*/}
                    {/*    />*/}
                    {/*    </View>*/}
                    {/*    <View style={styles.passwordDiv}>*/}
                    {/*        <Text>Password</Text>*/}
                    {/*        <TextInput placeholder="Enter password"*/}
                    {/*                   onChangeText={user_email => this.setState({user_email})}*/}
                    {/*                   underlineColorAndroid='transparent'*/}

                    {/*                   style={styles.TextInputStyleClass}*/}

                    {/*                   secureTextEntry={true}/>*/}
                    {/*    </View>*/}

                    {/*</View>*/}
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Button
                    title={'Login'}
                    style={styles.inputButton}
                    // onPress={}
                />
            </View>

        );
    }
}


LoginScreen.navigationOptions = {
    // header: false,
};

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