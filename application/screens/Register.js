import React, { Component } from 'react';
import { View } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';
import { Card } from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import FormValidation from '../utils/validation';
import * as firebase from 'firebase';

export default class Register extends Component {
    constructor () {
        super();

        this.state = {
            //usuario será un objeto
            user: {
                email: '',
                password: ''
            }
        };
        //Validación para el password (los dos que se ingresaron son iguales)
        this.samePassword = t.refinement(t.String, (s) => {
            return s === this.state.user.password
        });
        //Validaciones del formulario
        this.user = t.struct({
            email: FormValidation.email, //Validando email en componente validation
            password: FormValidation.password,
            password_confirmation: this.samePassword
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
                },
                password_confirmation: {
                    help: 'Repite password',
                    error: 'Los passwords no coinciden',
                    password: true,
                    secureTextEntry: true,
                }
            }
        };

        this.validate = null //para saber si pasó la validacion de email y password
    }

    register () {
        if(this.validate) {
        //cuando el formulario esté validado se registra al usuario

        }
    }
    onChange (user) {
        //Se ejecuta cuando el formulario cambie
        //Estado del usuario para comprobar si los passwords coinciden
        this.setState({user});
        if(user.password_confirmation !== null && user.password_confirmation !== '') {
            this.validate = this.refs.form.getValue();
        }
    }

    render () {
        return (
            <BackgroundImage source={require('../../assets/images/login-bg.jpg')}>
                <View>
                    <Card wrapperStyle={{paddingLeft: 10}} title="Regístrate">
                        <Form
                            ref="form"
                            type={this.user}
                            options={this.options}
                            onChange={(v) => this.onChange(v)}
                            value={this.state.user}
                        />
                        <AppButton
                            bgColor='#3FBF3F'
                            title='Regístrarme  '
                            action={this.register.bind(this)}
                         /> 
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
  }
