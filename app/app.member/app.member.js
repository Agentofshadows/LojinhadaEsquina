import React, { Component } from 'react';
import { AppRegistry, View , Text, Button, Image, ImageBackground, TouchableOpacity,StyleSheet, Alert, AsyncStorage , ActivityIndicator} from 'react-native';
import { Actions , Router , Scene } from 'react-native-router-flux';
import { SwitchNavigator , StackNavigator } from 'react-navigation';
import styles from './app.imports/app.import';

export default class Member extends Component {
    
    render(){
        return(
            <ImageBackground>
            <View>
                <Image source={} />
                <Text> Nome </Text>
                <Text> Data </Text>
                <Text> Email </Text>
                <TouchableOpacity> Editar detalhes </TouchableOpacity>
            </View>
            <View>
            <Image source={} />
                <Text> Email  </Text>
                <Text>  </Text>
                <Button> Editar detalhes </Button>
            </View>
            </ImageBackground>
        )
    }
}