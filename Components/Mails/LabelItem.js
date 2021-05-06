/* IMPORTS */

// Library imports
import React, { Component, useState } from 'react';
import { View, Alert, Button, Modal, Image, TouchableOpacity, Text, StyleSheet, FlatList, Pressable } from 'react-native';

import Popup from 'reactjs-popup';
import email from 'react-native-email'

// Local file imports
import './mail.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


// Definition of one label, and properties when clicking on it
class LabelItem extends React.Component {

  handleClick(){
    console.log('handleClick '+this.props.id);
    this.props.onClick(this.props.id);
  }

  render(){
    return (
        <li className="list-group-item justify-content-between" onClick={this.handleClick.bind(this)}>
          {this.props.label.name}
          <span className="badge badge-default badge-pill">{this.props.label.emailNumber}</span>
        </li>
    )
  }
}

export default LabelItem;
