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



// Definition of an Email : title, sender, time, buttons to open, add to favorites, delete
class EmailItem extends React.Component {

  // initial state
  state = {
    isVisible: false
  };

  // hide show modal
  displayModal(show){
    this.setState({isVisible: show})
  }


  addFavorite = (id) => {
    if (this.props.email.labelId == 1)
        this.props.email.labelId = 3;
    else if (this.props.email.labelId == 3)
        this.props.email.labelId = 1;
  }

  addBin = (id) => {
    if ((this.props.email.labelId == 1) || (this.props.email.labelId == 3))
        this.props.email.labelId = 7;
    else if (this.props.email.labelId == 7)
        this.props.email.labelId = 2;
  }

  handleEmailClickInfo = (id) => {
      alert('Clicked'+this.props.email.labelId);
    };

  render(){
    return (
      <li className="list-group-item d-flex justify-content-start" >

         <button className="open_button" onClick={this.addFavorite.bind(this.labelId)} > &#9734;Favoris&#9734;</button>&nbsp;&nbsp;&nbsp;
         <div id="author">{this.props.email.from}</div>
         <div id="unread_msg">{this.props.email.subject}</div>

         <span className="ml-auto p-2">
           {/*POPUP WINDOW TO READ THE ENTIRE MESSAGE */}

            <Popup
               trigger={<button className="open_button"> Ouvrir </button>}
               modal
               nested
             >
             {/* Popup interaction when clicking on the button */}
                {close => (
                 <div className="modal1">
                   <button className="close" onClick={close}>
                     &times;
                   </button>
                   <div className="header"> <br /><b>{this.props.email.subject}</b><br /><i>reçu de : </i>{this.props.email.from} <i>à {this.props.email.time}</i></div>
                   <div className="content">
                     {this.props.email.body}
                   </div>
                   <div className="actions">
                     <Popup
                       trigger={<button className="confirm_button"> Répondre </button>}
                       position="top center"
                       nested
                     >
                      {close => (
                                       <div className="modal1">
                                        <button className="close" onClick={close}>
                                        &times;
                                        </button>
                                        <div className="header"> <br /> <b><label>Sujet</label> : </b>Re: {this.props.email.subject}<br />
                                        <b><label></label>À &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b> {this.props.email.from}</div><br /><br />
                                        <div className="content">
                                         <textarea name="message" rows='4' cols='60'  maxlength="1000">Ecrivez votre message</textarea>
                                           </div>
                                        <div className="actions">
                                         <Popup
                                            trigger={<button onPress={this.addtoSent} className="confirm_button"> Envoyer </button>}
                                                position="top center"
                                                nested
                                             >
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

           &nbsp;&nbsp;

            <button className="open_button" onClick={this.addBin.bind(this.labelId)} > Supprimer </button>&nbsp;&nbsp;
            <span className="badge badge-default badge-pill">{this.props.email.time}</span>
          </span>

        </li>
    )
  }
}

export default EmailItem;