/* NAVEGACIÓN DEFINE ESTILOS PARA EL HEADER
Y LAS PANTALLAS PRIVADAS */
import React from 'react';
import { StackNavigator } from 'react-navigation'; //navegacion entre paginas de start login y registro
import StartScreen from '../screens/Start';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

export default StackNavigator (
    {
        Start: {
            screen: StartScreen
        },
        Login: {
            screen: LoginScreen
        },
        Register: {
            screen: RegisterScreen
        },
    },
    {
        initialRouteName: 'Start',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#83CCCC'
            },
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold'
            }
        }
    }
)