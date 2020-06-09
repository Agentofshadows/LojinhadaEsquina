import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Alert, AsyncStorage , ActivityIndicator} from 'react-native';
import { Actions , Router , Scene } from 'react-native-router-flux';
import { SwitchNavigator , StackNavigator } from 'react-navigation';
import styles from './app.imports/app.import';

export function AuthApp (token , id) {
    if (this.state.token && this.state.id) {
        const { token , id } = this.state;
  
        let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let number = /^\d+$/;
  
        if (token == '') {
          this.setState({ status: 'Ops ! algum erro ocorreu' });
        } else {
          fetch(
            'https://',
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                'type:processor': 'auth:lojinha',
                'token:member': this.state.token,
                'id:member': this.state.id
              }),
            }
          )
            .then(response => response.json())
            .then(responseJson => {
              if (responseJson === 'app:return') {
                this.onValueChange('tokenPeople', this.state.token),
                  Alert.alert('Ok Sucesso !', 'Seu Perfil foi encontrado');
                Actions.Member();
              } else if (responseJson === 'app:no-registered') {
                Alert.alert(
                  'Ops ! Algumas das Informações estão incorretas !',
                  'Verifique ! se estão corretas'
                ),
                  Actions.Auth();
              } else if (responseJson === 'app:no-server') {
                Alert.alert('Ops ! O Servidor não responde !'),
                  Actions.Auth();
              } else {
                Alert.alert('Ops ! Erro no Servidor !', 'Contate o Suporte'),
                  Actions.Auth();
              }
            });
         
        }
      }
}

export function Logouth (token) {

}

export function CheckAuth (token) {

}

export function SingUpMember (nome , token , id , cpf , email) {
  if (nome ) {
    const { token , id } = this.state;

    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let number = /^\d+$/;

    if (token == '') {
      this.setState({ status: 'Ops ! algum erro ocorreu' });
    } else {
      fetch(
        'https://',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'type:processor': 'singup:lojinha',
            'nome:member': this.state.nome,
            'token:member': this.state.token,
            'cpf:member': this.state.cpf,
            'email:member': this.state.email
          }),
        }
      )
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson === 'app:return') {
            this.onValueChange('tokenPeople', this.state.token),
              Alert.alert('Ok Sucesso !', 'Seu Perfil foi Criado');
            Actions.Member();
          } else if (responseJson === 'app:no-registered') {
            Alert.alert(
              'Ops ! Algumas das Informações estão incorretas !',
              'Verifique ! se estão corretas'
            ),
              Actions.Auth();
          } else if (responseJson === 'app:no-server') {
            Alert.alert('Ops ! O Servidor não responde !'),
              Actions.Auth();
          } else {
            Alert.alert('Ops ! Erro no Servidor !', 'Contate o Suporte'),
              Actions.Auth();
          }
        });
     
    }
  }
}

export function ListProduts (categoria) {
 
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  
  GetItem (student_name) {
   
  Alert.alert(student_name);
  
  }
  
  componentDidMount(this.state.categoria){

    return fetch('')
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
  
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
  
          height: .5,
          width: "100%",
          backgroundColor: "#000",
  
        }}
      />
    );
  }
  
}

export function ListCategorias () {

}

export function AddCart (id) {

}

export function GetCart (key) {

}

export function Payment (id , key) {

}

export function ListRecibos (token) {

}

export function ListNotification (token){

}

export function InfoMember (token) {

}
