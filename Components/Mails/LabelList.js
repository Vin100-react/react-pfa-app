/* IMPORTS */

// Library imports
import React, { Component, useState } from 'react';
import { View, Alert, Button, Modal, Image, TouchableOpacity, Text, StyleSheet, FlatList, Pressable } from 'react-native';

import Popup from 'reactjs-popup';
import email from 'react-native-email'

// Local file imports
import './mail.css';
import LabelItem from './LabelItem.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';



// Implementation of email labels, used to sort all the emails
class LabelList extends React.Component {

  static defaultProps = {

    labels: [{
      id : 1,
      name: 'Reçus',
      emailNumber : 9
    },{
      id : 3,
      name: 'Favoris',
      emailNumber : 2
    },{
      id : 5,
      name: 'Envoyés',
      emailNumber : 9
    },{
      id : 7,
      name: 'Corbeille',
      emailNumber : 12
    }]
  };

  render() {
    return (
      <ul className="list-group">
        {/* Creation of labels */}
        {this.props.labels.map((label) => (
            <LabelItem
              key={label.id}
              id={label.id}
              label={label}
              onClick={this.props.onLabelClick}/>
        ))}
      </ul>
    )
  }
}





export default LabelList;