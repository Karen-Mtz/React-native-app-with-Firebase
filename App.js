import React from 'react';
import { Text, View } from 'react-native';
import AppButton from './application/components/AppButton';
import PreLoader from './application/components/PreLoader';
import BackgroundImage from './application/components/BackgroundImage'
import Start from './application/screens/Start';
import firebaseConfig from './application/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig)

export default class App extends React.Component {
  render() {
  return (
      <BackgroundImage 
        source={require('./assets/images/login-bg.jpg')}
      >
        <Start/>
      </BackgroundImage>
    );
  }
}