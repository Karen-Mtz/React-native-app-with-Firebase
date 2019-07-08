/* DEFINIENDO ESQUELETO DEL FORMULARIO 
PARA PINTARLO  */

import React, { Component } from 'react';
import { View } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';
import t from 'tcomb-form-native'; 
import FormValidation from '../utils/validation';
import { Card } from 'react-native-elements';
const Form = t.form.Form; //tag para hacer fomulario
import * as firebase from 'firebase';
import firebaseConfig from '../utils/firebase';
// firebase.initializeApp(firebaseConfig)
import Toast from 'react-native-simple-toast';
// import console = require('console');

export default class Login extends Component {
    constructor () {
        super(); 
    
        this.user = t.struct({
            email: FormValidation.email,
            password: FormValidation.password //haciendo validacion
        });

        this.options = {
            fields: {
                email: {
                    help: 'Introduce tu email',
                    error: 'Email incorrecto',
                    autoCapitalize: 'none',
                },
                password: {
                    help: 'Introduce tu password',
                    error: 'Password incorrecto',
                    password: true,
                    secureTextEntry: true,
                }
            }
        }
    }

    login () {
        const validate = this.refs.form.getValue();//accediendo al formulario de abajo con this refs y con el metodo getvalue se valida
        if(validate) {
            firebase.auth().signInWithEmailAndPassword(validate.email, validate.password) //usando metodos de firebase y accedemos a datos del form
            // devuelve una promesa 
                .then(() => {
                    Toast.showWithGravity('Bienvenido', Toast.LONG, Toast.BOTTOM); //alertas si acceso existoso
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if(errorCode == 'auth/wrong-password') {
                        Toast.showWithGravity('Password incorrecto', Toast.LONG, Toast.BOTTOM);
                    } else {
                        Toast.showWithGravity(errorMessage, Toast.LONG, Toast.BOTTOM);
                    }
                });
        }
    }

    render () {
        return (
            <BackgroundImage source={require('../../assets/images/login-bg.jpg')}>
                <View>
                    <Card wrapperStyle={{paddingLeft:10}} title='Iniciar sesión'>
                        <Form //Formulario con campos email y password
                            ref='form' //para acceder al componente con this.ref
                            type={this.user}
                            options={this.options}
                        />
                        <AppButton
                            bgColor='#3FBF3F'
                            title='Login'
                            action={this.login.bind(this)}
                        />
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}