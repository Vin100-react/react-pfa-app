/* IMPORTS */

// Library imports
import React, { Component, useState } from 'react';
import { View, Alert, Button, Modal, Image, TouchableOpacity, Text, StyleSheet, FlatList, Pressable } from 'react-native';

import Popup from 'reactjs-popup';
import email from 'react-native-email'

// Local file imports
import './mail.css';
import EmailItem from './EmailItem.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';



// Definition of a Tab element, useful in class EmailList
class Tab extends React.Component {
  render(){
    console.log(this.props.activeTab);
    // Classes to add to the <a> element
    let tabClasses = ["nav-link"];
    // Classes to add to the <i> element (the icon)
    let iconClasses = ["fa",this.props.icon];

    // Update the class array if the state is visible
    if (this.props.activeTab) {
      tabClasses.push("active");
      console.log("active");
    }

    return (
        <li className="nav-item">
            <a className={tabClasses.join(' ')} href="#">
              <i className={iconClasses.join(' ')}></i>&nbsp;&nbsp;{this.props.name}
            </a>
        </li>
    )
  }
}


// Displays the mail list with a few tabs above
class EmailList extends React.Component {

  render(){
    return (
      <div>
        <ul className="nav nav-tabs">
          <Tab name="Principal" activeTab={true} icon="fa-inbox" />
          <Tab name="Social" activeTab={false} icon="fa-users" />
          <Tab name="Spam" activeTab={false}  icon="fa-tags" />
          <Tab name="Annonces" activeTab={false} icon="fa-info-circle" />
        </ul>
        <div className="list-group">
          {/* EmailItem creation */}
          {this.props.emails.map((email) => (
              <EmailItem
                key={email.id}
                email={email}
                />
          ))}
        </div>
      </div>
    )
  }
}



export default EmailList;