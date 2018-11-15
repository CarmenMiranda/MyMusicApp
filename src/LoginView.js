import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

import {Actions} from 'react-native-router-flux'
import {getToken} from './api-client'

export default class LoginView extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null,
        };
    }

    ingresar = () => {
        if(!this.state.username || !this.state.password){
            Alert.alert(
                '¡¡CAMPOS VACÍOS!!',
                'Los campos deben de llenarse',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        }else{
            getToken(this.state.username, this.state.password).then(data =>{
                global.token = data.token
                Actions.home()
            }).catch((error) => {
                //Action si hay un error en la respuesta
                //console.warn(error)
                Alert.alert(
                    'Error',
                    'Usuario o contraseña erróneos',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
            })
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('./assets/ucol.png')} style={styles.logo} resizeMode="contain" />
                <TextInput 
                    style={styles.textInput}
                    onChangeText={(username)=> this.setState({username})}
                    value={this.state.username}
                    placeholder={'Correo electrónico*'}
                    placeholderTextColor={'#000035'}
                    onSubmitEditing={()=>{this.passwordTextInput.focus();}}
                    returnKeyType={'next'}
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(password)=> this.setState({password})}
                    value={this.state.password}
                    secureTextEntry = {true}
                    placeholder={'Contraseña'}
                    placeholderTextColor={'#000035'}
                    ref={(input)=>{this.passwordTextInput = input;}}
                    returnKeyType={'done'}
                    onSubmitEditing={this.ingresar}
                    autoCapitalize={'none'}
                />
                <TouchableOpacity onPress={this.ingresar} style={styles.boton}>
                    <Text style={styles.textoBoton}>
                        ENTRAR
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 150,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: Platform.select({
            ios: 90,
            android: 50
        }),
        marginBottom: 25
    },
    textInput: {
        height: 40,
        backgroundColor: '#f2f2f2',
        width: 230,
        color: '#000035',
        marginBottom: 40,
        borderRadius: 5,
        padding: 5,
    },
    boton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 230,
        height: 40,
        //backgroundColor: '#00ccd0',
        backgroundColor: '#e37b84',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
    },
    textoBoton: {
        color: '#fff',
        fontSize: 22,
    },
});