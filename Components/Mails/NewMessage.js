/* IMPORTS */

// Library imports
import React, { Component, useState } from 'react';
import { View, Alert, Button, Modal, Image, TouchableOpacity, Text, StyleSheet, FlatList, Pressable } from 'react-native';

import Popup from 'reactjs-popup';
import email from 'react-native-email'

// Local file imports
import './mail.css';
import Data from './Data.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


/* Component above the email list and label list and under the navigation bar.
Definition of the "new message" button*/
class NewMessage extends React.Component {

    handleEmail = () => {
        const to = ['vin100times.public@gmail.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            bcc: 'mee@mee.com', // string or array of email addresses
            subject: 'Show how to use',
            body: 'Some body right here'
        }).catch(console.error)
    }

    addtoSent = () => {
        NewMail = {
                           id: 15,
                           labelId: 1,
                           from: 'Maëlle',
                           subject: 'Si',
                           time: "19:12",
                           body: "Ceci est un message"
                         }

        Data.props.email[0].subject = 'Nouveau titre';
    }

  render(){
    return (

      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-2"><br /><br />
        {/* NEW MESSAGE POPUP */}
            <Popup
                           trigger={<button className="btn btn-danger btn-primary btn-block"> Nouveau mail </button>}
                           modal
                           nested
                         >
                            {close => (
                             <div className="modal1">
                               <button className="close" onClick={close}>
                                 &times;
                               </button>
                               <div className="header"> <br /> <b><label>Sujet</label> : </b> <input type="text" name="titre" /><br />
                                                        <b><label></label>À &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b> <input type="text" name="destinataire" /></div><br /><br />
                               <div className="content">
                                <textarea name="message" rows='4' cols='60'  maxlength="1000">Ecrivez votre message</textarea>
                               </div>
                               <div className="actions">
                                 <Popup
                                   trigger={<button onPress={this.addtoSent} className="confirm_button"> Envoyer </button>}
                                   position="top center"
                                   nested
                                 >
                                   <span>
                                   </span>
                                 </Popup>
                                 <button
                                   className="deny_button"
                                   onClick={() => {
                                     console.log('modal closed ');
                                     close();
                                   }}
                                 >
                                   Fermer
                                 </button>
                               </div>
                             </div>
                            )}
                         </Popup>

        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-10"><br /><br />
          <div className="pull-right">
            <button type="button" className="btn btn-secondary">&nbsp;<i className="fa fa-cog" aria-hidden="true"></i>&nbsp;</button>
            <button type="button" className="btn btn-secondary">&nbsp;<i className="fa fa-bars" aria-hidden="true"></i>&nbsp;</button>
          </div>
        </div>
      </div>
    )
  }
}


export default NewMessage;