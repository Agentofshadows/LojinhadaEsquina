import React, { Component } from 'react';
import { AppRegistry, View , Text, Button, Image, ImageBackground,StyleSheet, Alert, AsyncStorage , ActivityIndicator} from 'react-native';
import { Actions , Router , Scene } from 'react-native-router-flux';
import { SwitchNavigator , StackNavigator } from 'react-navigation';
import { styles , URL_DOMINIO } from '../app.imports/app.import';

export default class LineStore extends Component{

    List_products =()=> {
        
        return fetch(URL_DOMINIO + 'ecommerce/products/Key=9bdb224ae99cf1af4d0f46893f3f7273',{
            method: 'POST',
            headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
        }, body: JSON.stringify({
          'type:processor':'list:products'
        }) 
          })
          .then((response) => response.json())
          .then((responseJson) => {
           let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
             this.setState({
             isLoading: false,
             dataSource: ds.cloneWithRows(responseJson),
            }, function() {

            });
                })
            .catch((error) => {
               console.error(error);
             });
      }

    render(){
        return(
            <ImageBackground 
            source={require('../assets/img.index/index.jpg')} style={styles.background}>
                <View>
                    <Text>  </Text>
                </View>
                
            </ImageBackground>
        )
    }
    
}