/* COMPONENTE CON IMAGEN DE FONDO 
REUTILIZABLE PARA TODA LA APLICACIÓN */

import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

export default class BackgroundImage extends Component {
    render () {
        const { source, children } = this.props //children todo aquello que esté dentro de la etiqueta de este componente
        return (
            <ImageBackground 
            source={ source }
            style={{flex:1, width: null, height: null}}
            >
                {children}
            </ImageBackground>
        )
    }
}