import React from 'react';
import AppButton from './application/components/AppButton';
import PreLoader from './application/components/PreLoader';
import BackgroundImage from './application/components/BackgroundImage'

export default function App() {
  return (
      <BackgroundImage 
        source={require('./assets/images/login-bg.jpg')}
      />
  );
}

