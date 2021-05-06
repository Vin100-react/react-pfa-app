/* IMPORTS */

// Library imports
import React, { Component, useState } from 'react';
import { View, Alert, Button, Modal, Image, TouchableOpacity, Text, StyleSheet, FlatList, Pressable } from 'react-native';

import Popup from 'reactjs-popup';
import email from 'react-native-email'

// Local file imports
import './mail.css';
import NewMessage from './NewMessage.js'
import LabelList from './LabelList.js'
import EmailList from './EmailList.js'
import EmptyBox from './EmptyBox.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';






// Main class that contains the labels and the email list.
class Body extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedLabel : 1
    }
  }

  handleLabelClick(labelId){
    console.log('Label clicked: '+labelId);
    this.setState({
      selectedLabel: labelId
    });
  }



  static defaultProps = {
    /*Emails to be displayed on the Email List. Since there is no user account
    and no possibility to receive messages, this list is static and for front-end purposes*/
    emails : [
      {
        id: 0,
        labelId: 1,
        from: 'aymeric.feyrron@enseirb-matmeca.fr',
        subject: 'Réunion PFA',
        time: "11:15",
        body: "La réunion PFA aura bien lieu en salle TD10 à 17h."
      },
      {
        id: 1,
        labelId: 1,
        from: 'Marc',
        subject: 'Le Syllabus',
        time: "22:08",
        body: "Le syllabus est fonctionnel. Cordialement"
      },
      {
        id: 2,
        labelId: 1,
        from: 'Maëlle',
        subject: 'Oui',
        time: "19:12",
        body: "Ceci est un message"
      },
      {
        id: 3,
        labelId: 3,
        from: 'Mehdi',
        subject: 'Ceci est un message archivé',
        time: "18:35",
        body: "Ceci est un message"
      },
      {
        id: 4,
        labelId: 5,
        from: 'Maxime',
        subject: 'Ceci est un message envoyé',
        time: "14:05",
        body: "Ceci est un message"
      },
      {
        id: 5,
        labelId: 7,
        from: 'Raphaël',
        subject: 'Ceci est un message supprimé',
        time: "14:05",
        body: "Ceci est un message"
      },
      {
        id: 6,
        labelId: 1,
        from: 'Maëlle',
        subject: 'Bonjour',
        time: "19:12",
        body: "Ceci est un message"
      },

       {
         id: 7,
         labelId: 1,
         from: 'Marc',
         subject: 'Mail',
         time: "19:12",
         body: "Ceci est un message"
       },

       {
         id: 8,
         labelId: 1,
         from: 'Omayma',
         subject: 'Un nouveau mail',
         time: "19:12",
         body: "Ceci est un message"
       },

       {
         id: 9,
         labelId: 1,
         from: 'Aymeric',
         subject: 'Encore un nouveau mail',
         time: "19:12",
         body: "Ceci est un message"
       },

       {
         id: 10,
         labelId: 1,
         from: 'Omayma',
         subject: 'Un dernier mail',
         time: "19:12",
         body: "Ceci est un message"
       },

    ]
  };

  render() {
    const filteredEmails = this.props.emails.filter(e => e.labelId & e.labelId == this.state.selectedLabel);

    let content = null;
    if(filteredEmails.length > 0){
       content = <EmailList emails={filteredEmails} />;
    } else {
       content = <EmptyBox />;}

    return (
      <div className="container">
        <NewMessage />
        <hr />
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <LabelList onLabelClick={this.handleLabelClick.bind(this)} />
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-10">
            {content}
          </div>
        </div><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}


export default Body;