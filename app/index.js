import React, { Component } from 'react';
import { AppRegistry, View , Text, Button, Image, ImageBackground,StyleSheet, Alert, AsyncStorage , ActivityIndicator} from 'react-native';
import { Actions , Router , Scene } from 'react-native-router-flux';
import { SwitchNavigator , StackNavigator } from 'react-navigation';
import styles from './app.imports/app.import';
import AuthApp from './app.server/server.components';

export default class Auth extends Component {
    render(){
        return(
            <ImageBackground>
                <Image source={} />
                <Text>  </Text>
                <Button> Produtos </Button>
                <Button> Minha Conta </Button>
                
            </ImageBackground>
        )
    }
}

AppRegistry.registerComponent('App' , ()=> Auth)