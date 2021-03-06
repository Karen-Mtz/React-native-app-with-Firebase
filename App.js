import React from 'react';
import { Text } from 'react-native-elements';
import PreLoader from './application/components/PreLoader';
import GuestNavigation from './application/navigations/guest';
import firebaseConfig from './application/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  //para detectar si el usuario está identificado
  //o no y mostrar zona pública o privada
  constructor () {
    super();
      this.state = {
        isLogged: false,
        loaded: false
      }
    }
    //cuando cargue el componente 
    async componentDidMount() {
      await firebase.auth().onAuthStateChanged((user) => {
        if(user !== null) {
          this.setState({
            isLogged: true,
            loaded: true
          }); 
        } else {
          this.setState({
            isLogged: false,
            loaded: true
          });
        }
      })
  }  
  render() {
  const {isLogged, loaded} = this.state;
  if( ! loaded ) {
    return (<PreLoader />)
  }
  if(isLogged) {
    return(<Text>Logueado</Text>)
  }
  else {
    return (<GuestNavigation />)
  }
  }
}
