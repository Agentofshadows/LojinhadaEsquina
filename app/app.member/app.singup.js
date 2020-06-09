import React, { Component } from 'react';
import { AppRegistry, View , Text, Button, Image, ImageBackground,StyleSheet, Alert, AsyncStorage , ActivityIndicator} from 'react-native';
import { Actions , Router , Scene } from 'react-native-router-flux';
import { SwitchNavigator , StackNavigator } from 'react-navigation';
import styles from '../app.imports/app.import';
import { SingUpMember } from '../app.server/server.components';

export class SingUp extends Component{
    SingUpMember(this.state.name , this.state.token , this.state.id , this.state.cpf , this.state.email);
    render(){
        return(
            <ImageBackground>

            </ImageBackground>
        )
    }
    
}