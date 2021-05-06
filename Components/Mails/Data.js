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

 class Data extends React.Component {

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
        subject: 'bonjour',
        time: "19:12",
        body: "Ceci est un message"
      },

       {
         id: 7,
         labelId: 1,
         from: 'Maëlle',
         subject: 'kk',
         time: "19:12",
         body: "Ceci est un message"
       },

       {
         id: 8,
         labelId: 1,
         from: 'Maëlle',
         subject: 'enseirb',
         time: "19:12",
         body: "Ceci est un message"
       },

       {
         id: 9,
         labelId: 1,
         from: 'Maëlle',
         subject: 'okok',
         time: "19:12",
         body: "Ceci est un message"
       },

       {
         id: 10,
         labelId: 1,
         from: 'Maëlle',
         subject: 'e',
         time: "19:12",
         body: "Ceci est un message"
       },

       {
         id: 11,
         labelId: 1,
         from: 'Maëlle',
         subject: 'Non',
         time: "19:12",
         body: "Ceci est un message"
       },

       {
         id: 12,
         labelId: 1,
         from: 'Maëlle',
         subject: 'r',
         time: "19:12",
         body: "Ceci est un message"
       },
       {
         id: 13,
         labelId: 1,
         from: 'Maëlle',
         subject: 'yes',
         time: "19:12",
         body: "Ceci est un message"
       },
       {
         id: 14,
         labelId: 1,
         from: 'Maëlle',
         subject: 'ja',
         time: "19:12",
         body: "Ceci est un message"
       },
       {
         id: 15,
         labelId: 1,
         from: 'Maëlle',
         subject: 'Si',
         time: "19:12",
         body: "Ceci est un message"
       },
       {
         id: 16,
         labelId: 1,
         from: 'Maëlle',
         subject: 'yeah',
         time: "19:12",
         body: "Ceci est un message"
       },
       {
         id: 17,
         labelId: 1,
         from: 'Maëlle',
         subject: 'test',
         time: "19:12",
         body: "Ceci est un message"
       },
       {
         id: 18,
         labelId: 1,
         from: 'Maëlle',
         subject: 'end',
         time: "19:12",
         body: "Ceci est un message"
       },

    ]
  };

  }

  export default Data;