
import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Alert, AsyncStorage , ActivityIndicator} from 'react-native';
import { Actions , Router , Scene } from 'react-native-router-flux';
import { SwitchNavigator , StackNavigator } from 'react-navigation';

import {Auth , Member , ConfigMember , LineStore , 
  CartStore , Notification ,
  Payment , Recibo , SuportApp ,
  InfoApp , ErrorApp , styles} from './app/app.imports/app.import.js';

class LojinhadaEsquina extends Component {
  constructor() {
    super();
    this.state = {
      hasTokenMember: false,
      isLoaded: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('tokenPeopleMember').then(tokenMember => {
      if (tokenMember !== null) {
        this.setState({
          hasTokenMember: true,
          isLoaded: true,
        });
      } else {
        this.setState({
          hasTokenMember: false,
          isLoaded: true,
        });
      }
    });
  }

/** CODE : 9bdb224ae99cf1af4d0f46893f3f7273  **/ 

  render() {
    if (!this.state.isLoaded) {
      return <ActivityIndicator />;
    } else {
      return (
        <Router>
          <Scene key="root">

             <Scene
              component={LineStore}
              hideNavBar={true} 
              initial={true}
              key="LineStore"
              title=" Linha de Produtos "           
             />

             <Scene
              component={Auth}
              hideNavBar={true}
              key="Auth"
              title="Login"
            />
             <Scene
              component={GetStore}
              hideNavBar={true}
              key="LineStore"
              title="Corpo do Produto"           
             />
             <Scene
              component={CartStore}
              hideNavBar={true}
              key="CartStore"
              title="Carrinho de Compras"           
             />
             <Scene
              component={Member}
              hideNavBar={true}
              key="Member"
              title="Minha Conta"           
             />
          
                <Scene
                  component={ConfigMember}
                  hideNavBar={true}
                  initial={this.state.hasTokenMember === true}
                  key="Member-info"
                  title="Informacoes"
                />
                 <Scene
                  component={ConfigMember}
                  hideNavBar={true}
                  initial={this.state.hasTokenMember === true}
                  key="Edit-info"
                  title="Edicao das Informacoes"
                />
          
            <Scene
              component={InfoApp}
              hideNavBar={false}
              key="Info"
              title="Lojinha da Esquina"
            />
            <Scene
                  component={SuportApp}
                  hideNavBar={true}
                  key="SuportApp"
                  title="Nosso Suporte"
                />
          </Scene>
        </Router>
      );
    }
  }
}

export default LojinhadaEsquina;