/* IMPORTS */

// Library imports
import React, { Component, useState } from 'react';
import { View, Alert, Button, Modal, Image, TouchableOpacity, Text, StyleSheet, FlatList, Pressable } from 'react-native';


// Local file imports
import Banner from '../Banner';
import Header from'./Header.js'
import Body from './Body.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


// Mail component that contains the header and the main container
class Mail extends React.Component {
  render(){
    return (
      <div>
        <Header title="Boîte Mail" user="vincent.carton@enseirb-matmeca.fr" />
        <Body />
      </div>
    )
  }
}


// Final mail class, that adds the navigation banner to the Mail class
class FullMail extends React.Component {
  render(){
    return (
        <View style={styles.main_container}>
          <Banner navigation={this.props.navigation}/>
          <View style={styles.main_interface}>
            <div><Mail /></div>
          </View>
         </View>
    )
  }
}


// React Native basic stylesheet
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column'
  },
  main_interface: {
    flex: 4
  },
  default_text: {
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20
  }

})


export default FullMail; // This is the only class exported
