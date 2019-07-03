/* ESTE COMPONENTE ES DE UN 
PRELOADER QUE VA A INFORMAR AL 
USUARIO QUE ALGO ESTÁ CARGANDO */

import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); //para obtener acceso a la altura del dispostivo

export default class PreLoader extends Component {
    render () {
        return (
            <View style={[styles.preloader]}>
                <ActivityIndicator style={{ height: 80 }} size='large' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    preloader: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        backgroundColor: '#242935'

    }
});