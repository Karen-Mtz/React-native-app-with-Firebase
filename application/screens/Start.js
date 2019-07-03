/* COMPONENTE CON PAGINA DE 
INICIO, PRIMERA PAGINA QUE VERÁ EL
USUARIO AL INICIAR LA APP SIEMPRE 
Y CUANDO NO ESTÉ LOGEADO */

import React, { Component } from 'react';
import { View } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';
import { NavigationActions } from 'react-navigation'; //definir la navegación hacia otra paginas para cambiar de paginas
import Toast from 'react-native-simple-toast'; //notificaciones para el usuario de error y exito
import * as firebase from 'firebase';

export default class Start extends Component {
    static navigationOptions = {
        title: 'Expo App'
    }
    login () {
        const navigateAction = NavigationActions.navigate({
            routeName: 'Login'
        });
        this.props.navigation.dispatch(navigateAction);
    }

    register () {

    }

    async facebook () {

    }

    render () {
        return (
            <BackgroundImage source={require('../../assets/images/login-bg.jpg')}>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <AppButton
                        bgColor='#C14242'
                        title='Entrar  '
                        action={this.login.bind(this)}
                        iconName='sign-in'
                        iconSize={30}
                        iconColor='#C14242'
                    />
                    <AppButton
                        bgColor='#C14242'
                        title='Regístrarme  '
                        action={this.register.bind(this)}
                        iconName='user-plus'
                        iconSize={30}
                        iconColor='#1B8751'
                    />
                    <AppButton
                        bgColor='#C14242'
                        title='Facebook  '
                        action={this.facebook.bind(this)}
                        iconName='facebook'
                        iconSize={30}
                        iconColor='#2C2CAE'
                    />
                 </View>
            </BackgroundImage>
        );
    }
}
