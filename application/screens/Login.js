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
import Toast from 'react-native-simple-toast';

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
                            iconName='sign-in'
                            iconSize={30}
                            iconColor='#0A2D0A'
                        />
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}